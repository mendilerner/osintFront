import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, from, split } from '@apollo/client';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
const removeTypenameLink = removeTypenameFromVariables();
const BASE_URI = import.meta.env.VITE_SERVER_HOST || "http://localhost:4000/graphql";
// Create an HTTP link
const httpLink = createHttpLink({
  uri: BASE_URI,
});
const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
}));
const linka = from([removeTypenameLink, httpLink]);
// Set up the middleware to add the token to the request headers
const authMiddleware = new ApolloLink((operation, forward) => {
  // Get the token from wherever you store it (e.g., localStorage, state, etc.)
  const token = localStorage.getItem('access_token') || "no_access_token";
  // Add the token to the request headers
  operation.setContext({
    headers: {
      access_token: token , // Add the token as 'Bearer <token>'
    },
  });
  return forward(operation);
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);
// Create the Apollo Client instance
const client = new ApolloClient({
  link: splitLink, // Concatenate the auth middleware with the HTTP link
  cache: new InMemoryCache(),
});
export default client;