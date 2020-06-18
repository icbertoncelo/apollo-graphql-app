import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const ADD_PRODUCT = 'ADD_PRODUCT';

export { pubsub, ADD_PRODUCT };
