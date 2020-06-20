import React, { useState } from 'react';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '../../graphql/queries/products';
import { PRODUCTS_SUBSCRIPTION } from '../../graphql/subscriptions/products';
import { DELETE_PRODUCT } from '../../graphql/mutations/products';

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

  const { loading, error, data } = useQuery<IProductaData>(GET_PRODUCTS, {
    onCompleted: () => data?.products && setProductsData(data.products),
  });

  const [deleteProduct, deleteProductMutationData] = useMutation(
    DELETE_PRODUCT
  );

  useSubscription(PRODUCTS_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      subscriptionData.data.products &&
        setProductsData(subscriptionData.data.products);
    },
  });

  function handleDeleteProduct(productId: string) {
    deleteProduct({
      variables: {
        id: productId,
      },
    });
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error! {error.message}</h1>;

  return (
    <div>
      <ul>
        {productsData.map((product: any) => (
          <li
            key={product.id}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <h2>
              {product.id} - {product.name}
            </h2>
            <button
              type="button"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
