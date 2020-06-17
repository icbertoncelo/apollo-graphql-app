import ProductsHandler from './ProductsHandler';
import { ICreateProductDTO } from './dtos';
import { Product } from '../../entities/Product';

const productsHandler = new ProductsHandler();

interface IShowRequest {
  id: string;
}

interface ICreateRequest {
  product: ICreateProductDTO;
}

export default {
  Query: {
    product: (_: any, { id }: IShowRequest): Promise<Product | undefined> => {
      return productsHandler.show(id);
    },
    products: productsHandler.index,
  },
  Mutation: {
    saveProduct: (_: any, { product }: ICreateRequest): Promise<Product> => {
      return productsHandler.create(product);
    },
  },
};
