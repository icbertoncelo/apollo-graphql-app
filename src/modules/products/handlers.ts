import { Product } from '../../entities/Product';

export default {
  getProducts: () => {
    return Product.find();
  },
};
