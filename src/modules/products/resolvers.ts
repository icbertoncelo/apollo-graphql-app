import ProductsHandler from './ProductsHandler';
import { ICreateProductDTO } from './dtos';
import { Product } from '../../entities/Product';
import { pubsub, ADD_PRODUCT } from '../../graphql/pubsub';

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
  },
  Subscription: {
    products: {
      subscribe: () => pubsub.asyncIterator([ADD_PRODUCT]),
      resolver: (payload: Array<Product>) => {
        return payload;
      },
    },
  },
};
