import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql"
});

export default client;
