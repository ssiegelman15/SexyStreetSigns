const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle, Destination } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Queries
  Query: {
    // get all users
    users: async () => {
      return User.find().populate('vehicleInfo').populate('destinations');
    },
    // get a single user
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        .populate('vehicleInfo')
        .populate('destinations');
    },
    // get yourself!
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
          .populate('vehicleInfo')
          .populate('destinations');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  // Mutations
  Mutations: {
    // Create a user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          'Incorrect credentials. Check email and password'
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError(
          'Incorrect credintials. Check email and password'
        );
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};
