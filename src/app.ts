import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import './database';

import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
});

const app = express();
server.applyMiddleware({ app, path: '/graphql' });

export default app;
