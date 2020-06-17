import { Product } from '../../entities/Product';
import { ICreateProductDTO } from './dtos';

class ProductsHandler {
  public async show(id: string): Promise<Product | undefined> {
    const product = await Product.findOne(id);

    return product;
  }

  public async index(): Promise<Product[]> {
    const products = await Product.find();

    return products;
  }

  public async create({
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

    return product;
  }
}

export default ProductsHandler;
