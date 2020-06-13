import productsHandlers from './handlers';

export default {
  Query: {
    products: productsHandlers.getProducts,
  },
};
