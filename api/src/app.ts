import 'dotenv/config';
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

import './database';

import { typeDefs, resolvers } from './graphql';

const app = express();
app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
});
apolloServer.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

export default httpServer;
