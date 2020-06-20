import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String) {
    deleteProduct(id: $id)
  }
`;
