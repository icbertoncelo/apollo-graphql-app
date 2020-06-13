import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type Product {
    name: String
    description: String
    price: Int
    created_at: DateTime
    updated_at: DateTime
  }

  type Query {
    products: [Product]
  }
`;

export default typeDefs;
