import { Product } from '../../entities/Product';
import { ICreateProductDTO } from './dtos';
import { pubsub, ADD_PRODUCT } from '../../graphql/pubsub';

class ProductsHandler {
  public async getProduct(id: string): Promise<Product | undefined> {
    const product = await Product.findOne(id);

    return product;
  }

  public async getProducts(): Promise<Product[]> {
    const products = await Product.find();

    return products;
  }

  public async addProduct({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = Product.create({
      name,
      description,
      price,
    });

    await Product.save(product);
    const products = await Product.find();

    pubsub.publish(ADD_PRODUCT, { products });

    return product;
  }
}

export default ProductsHandler;
