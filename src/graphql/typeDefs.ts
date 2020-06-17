import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type Product {
    id: String
    name: String
    description: String
    price: Int
    created_at: DateTime
    updated_at: DateTime
  }

  input ProductInput {
    name: String!
    description: String!
    price: Int!
  }

  type Query {
    product(id: String): Product
    products: [Product]
  }

  type Mutation {
    saveProduct(product: ProductInput): Product
  }
`;

export default typeDefs;
