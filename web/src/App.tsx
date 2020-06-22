import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import apolloClient from './config/apolloClient';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </ApolloProvider>
);

export default App;
