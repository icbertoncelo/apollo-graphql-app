import { gql } from '@apollo/client';

export const PRODUCTS_SUBSCRIPTION = gql`
  subscription Products {
    products {
      id
      name
      description
      price
    }
  }
`;
