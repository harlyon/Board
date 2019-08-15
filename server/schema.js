exports.typeDefs = `
type Job {
  _id: ID!
  title: String!
  company: String!
  imageUrl: String!
  category: String!
  location: String!
  salary: String!
  experience: String!
  requirement: String!
  description: String!
  deadline: String!
  instructions: String!
  createdDate: String
  likes: Int
  username: String
}
type User {
  _id: ID!
  username: String! #@unique
  password: String!
  email: String!
  joinDate: String
  favorites: [Job]
}
type Query {
  getAllJobs: [Job]
  getJob(_id: ID!): Job
  searchJob(searchTerm: String): [Job]
  getCurrentUser: User
  getUserJobs(username: String!): [Job]
}
type Token {
  token: String!
}
type Mutation {
  addJob(
    title: String!
    company: String!
    imageUrl: String!
    category: String!
    location: String!
    salary: String!
    experience: String!
    requirement: String!
    deadline: String!
    description: String!
    instructions: String!
    username: String
  ): Job
  deleteUserJob(_id: ID): Job
  updateUserJob(
    _id: ID!
    title: String!
    company: String!
    imageUrl: String!
    category: String!
    location: String!
    salary: String!
    experience: String!
    requirement: String!
    deadline: String!
    description: String!
    instructions: String!
    ): Job
  likeJob(_id: ID!, username: String!): Job
  unlikeJob(_id: ID!, username: String!): Job
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}
`;