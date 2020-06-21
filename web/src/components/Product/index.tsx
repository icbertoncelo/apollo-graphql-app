import React, { memo } from 'react';

import { Container } from './styles';

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface IProductProps {
  product: IProduct;
  handleDeleteProduct(id: string): void;
}

const Product: React.FC<IProductProps> = ({ product, handleDeleteProduct }) => (
  <Container>
    <div>
      <p>{product.name}</p>
      <strong>{product.price}</strong>
    </div>
    <span>{product.description}</span>
    <button type="button" onClick={() => handleDeleteProduct(product.id)}>
      Excluir
    </button>
  </Container>
);

export default memo(Product);
