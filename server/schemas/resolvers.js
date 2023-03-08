const { GraphQLError } = require("graphql");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, { username }) => {
      return User.fineOne({ username }).populate("savedBooks");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("No profile with this email found!", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { username, bookInfo }) => {
      const book = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            books: { ...bookInfo },
          },
        },
        {
          new: true,
        }
      );
      return user;
    },
    removeBook: async (parent, { bookId }) => {
      const book = await Book.findOneAndDelete({});

      return user;
    },
  },
};

module.exports = resolvers;
