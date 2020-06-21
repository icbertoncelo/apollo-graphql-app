import React, { useState, useCallback } from 'react';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries/products';
import { PRODUCTS_SUBSCRIPTION } from '../../graphql/subscriptions/products';
import { ADD_PRODUCT, DELETE_PRODUCT } from '../../graphql/mutations/products';

import Product from '../../components/Product';

import { Container, Form, List } from './styles';

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface IProductaData {
  products: IProduct[];
}

const Dashboard: React.FC = () => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    price: '',
  });

  const { loading, error, data } = useQuery<IProductaData>(GET_PRODUCTS, {
    onCompleted: () => data?.products && setProductsData(data.products),
  });

  const [deleteProduct, deleteProductMutaionData] = useMutation(DELETE_PRODUCT);
  const [addProduct, addProductMutaionData] = useMutation(ADD_PRODUCT);

  useSubscription(PRODUCTS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      subscriptionData.data.products &&
        setProductsData(subscriptionData.data.products);
    },
  });

  const handleDeleteProduct = useCallback(
    (productId: string) => {
      deleteProduct({
        variables: {
          id: productId,
        },
      });
    },
    [deleteProduct]
  );

  const handleChangeFormValue = useCallback(
    (event): void => {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    },
    [formValues]
  );

  const hendleCreateProduct = useCallback(
    (event) => {
      event.preventDefault();

      const product = {
        name: formValues.name,
        description: formValues.description,
        price: parseInt(formValues.price),
      };

      addProduct({
        variables: {
          product,
        },
      });

      setFormValues({ name: '', description: '', price: '' });
    },
    [addProduct, formValues]
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error! {error.message}</h1>;

  return (
    <Container>
      <Form onSubmit={hendleCreateProduct}>
        <div>
          <h1>Cadastro de produtos</h1>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={formValues.name}
            onChange={handleChangeFormValue}
          />
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            value={formValues.description}
            onChange={handleChangeFormValue}
          />
          <input
            type="number"
            placeholder="Preço"
            name="price"
            value={formValues.price}
            onChange={handleChangeFormValue}
          />
          <button type="submit">Enviar</button>
        </div>
      </Form>
      <List>
        {productsData.length > 0 ? (
          <ul>
            {productsData.map((product: IProduct) => (
              <Product
                key={product.id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </ul>
        ) : (
          <h3>Nenhum produto Cadastrado</h3>
        )}
      </List>
    </Container>
  );
};

export default Dashboard;
