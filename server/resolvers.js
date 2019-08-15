const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;

  return jwt.sign(
    {
      username,
      email
    },
    secret,
    { expiresIn }
  );
};

exports.resolvers = {
  Query: {
    getAllJobs: async (root, args, { Job }) => {
      const allJobs = await Job.find().sort({ createdDate: "desc" });
      return allJobs;
    },
    getJob: async (root, { _id }, { Job }) => {
      const job = await Job.findOne({ _id });
      return job;
    },
    searchJob: async (root, { searchTerm }, { Job }) => {
      if (searchTerm) {
        const searchResults = await Job.find(
          {
            $text: { $search: searchTerm }
          },
          {
            score: { $meta: "textScore" }
          }
        ).sort({
          score: { $meta: "textScore" }
        });
        return searchResults;
      } else {
        const jobs = await Job.find().sort({
          likes: "desc",
          createdDate: "desc"
        });
        return jobs;
      }
    },

    getUserJobs: async (root, { username }, { Job }) => {
      const userJobs = await Job.find({ username }).sort({
        createdDate: "desc"
      });
      return userJobs;
    },

    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Job"
      });
      return user;
    }
  },

  Mutation: {
    addJob: async (
      root,
      {
        title,
        company,
        imageUrl,
        category,
        location,
        salary,
        experience,
        requirement,
        deadline,
        description,
        instructions,
        username
      },
      { Job }
    ) => {
      const newJob = await new Job({
        title,
        company,
        imageUrl,
        category,
        location,
        salary,
        experience,
        requirement,
        deadline,
        description,
        instructions,
        username
      }).save();
      return newJob;
    },

    likeJob: async (root, { _id, username }, { Job, User }) => {
      const job = await Job.findOneAndUpdate(
        { _id },
        { $inc: { likes: 1 } }
      );
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: _id } }
      );
      return job;
    },

    unlikeJob: async (root, { _id, username }, { Job, User }) => {
      const job = await Job.findOneAndUpdate(
        { _id },
        { $inc: { likes: -1 } }
      );
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: _id } }
      );
      return job;
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username: username });
      if (user) {
        throw new Error("User already exists");
      }

      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

