import { productsResolvers } from '../modules/products';
import typeDefs from './typeDefs';

const resolvers = [productsResolvers];

export { resolvers, typeDefs };
