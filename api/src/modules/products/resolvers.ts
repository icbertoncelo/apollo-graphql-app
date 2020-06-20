import ProductsHandler from './ProductsHandler';
import { ICreateProductDTO } from './dtos';
import { Product } from '../../entities/Product';
import { pubsub, ADD_DELETE_PRODUCT } from '../../graphql/pubsub';

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
      return productsHandler.getProduct(id);
    },
    products: productsHandler.getProducts,
  },
  Mutation: {
    addProduct: (_: any, { product }: ICreateRequest): Promise<Product> => {
      return productsHandler.addProduct(product);
    },
    deleteProduct: (_: any, { id }: IShowRequest): Promise<void> => {
      return productsHandler.deleteProduct(id);
    },
  },
  Subscription: {
    products: {
      subscribe: () => pubsub.asyncIterator([ADD_DELETE_PRODUCT]),
    },
  },
};
