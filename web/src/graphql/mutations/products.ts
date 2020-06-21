import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String) {
    deleteProduct(id: $id)
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($product: ProductInput) {
    addProduct(product: $product) {
      id
      name
    }
  }
`;
