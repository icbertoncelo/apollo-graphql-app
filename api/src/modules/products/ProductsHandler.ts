import { Product } from '../../entities/Product';
import { ICreateProductDTO } from './dtos';
import { pubsub, ADD_DELETE_PRODUCT } from '../../graphql/pubsub';

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

    pubsub.publish(ADD_DELETE_PRODUCT, { products });

    return product;
  }

  public async deleteProduct(id: string): Promise<void> {
    await Product.delete({ id });

    const products = await Product.find();
    pubsub.publish(ADD_DELETE_PRODUCT, { products });
  }
}

export default ProductsHandler;
