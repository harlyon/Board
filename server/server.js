const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ApolloServer, gql } = require('apollo-server-express');
// const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
// const { makeExecutableSchema } = require("graphql-tools");
require("dotenv").config({ path: "variables.env" });

const app = express();
app.use(cors());

const Job = require("./models/Job")
const User = require("./models/User")

//Create GraphQL Schema
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers: resolvers
// });

const PORT = process.env.PORT || 9000;

const server = new ApolloServer
({ typeDefs, resolvers,
  context : {
  Job,
  User
} });
server.applyMiddleware({ app });
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})

//Connect Schemas with graphQL
// app.use(
//   "/graphql",
//   bodyParser.json(),
//   graphqlExpress(({ currentUser }) => ({
//     schema,
//     context: {
//       Job,
//       User,
//       currentUser
//     }
//   }))
// );

//Set uop JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token !== "null") {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (error) {
      console.log("Token not found");
    }
  }
  next();
})

//Create GraphQL application
// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));


//Connect to Database and start Server

mongoose
  .connect(process.env.MONGO_URI,{ useNewUrlParser: true, useCreateIndex: true, })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))
  // .then(() =>
  //   app.listen(PORT, () => {
  //     console.log(`Server started on ${PORT}`);
  //   })
  // );