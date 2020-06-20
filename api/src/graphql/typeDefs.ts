import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime
  scalar Void

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
    addProduct(product: ProductInput): Product
    deleteProduct(id: String): Void
  }

  type Subscription {
    products: [Product]
  }
`;

export default typeDefs;
