import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql"
});

// const httpLink = createHttpLink({
//   uri: "http://localhost:9000"
// });

// const authLink = setContext(() => {
//   const token = localStorage.getItem("jwtToken");
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ""
//     }
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

export default client;
