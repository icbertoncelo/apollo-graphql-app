import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const ADD_DELETE_PRODUCT = 'ADD_DELETE_PRODUCT';

export { pubsub, ADD_DELETE_PRODUCT };
