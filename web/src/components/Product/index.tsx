import React, { memo, useMemo } from 'react';

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

const Product: React.FC<IProductProps> = ({ product, handleDeleteProduct }) => {
  const productPrice = useMemo(() => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(product.price);

    return formattedPrice;
  }, [product.price]);

  return (
    <Container>
      <div>
        <p>{product.name}</p>
        <strong>{productPrice}</strong>
      </div>
      <span>{product.description}</span>
      <button type="button" onClick={() => handleDeleteProduct(product.id)}>
        Excluir
      </button>
    </Container>
  );
};

export default memo(Product);
