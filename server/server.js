const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ApolloServer } = require('apollo-server-express');
require("dotenv").config({ path: "variables.env" });

const app = express();
app.use(cors());

const Job = require("./models/Job")
const User = require("./models/User")

//Create GraphQL Schema
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");


const PORT = process.env.PORT || 9000;

//Create GraphQL application
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

//Connect to Database and start Server
mongoose
  .connect(process.env.MONGO_URI,{ useNewUrlParser: true, useCreateIndex: true, })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))
