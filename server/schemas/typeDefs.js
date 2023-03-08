const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    bookCount: 
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInfo {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userName: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!, bookInfo: BookInfo!): User
    removeBook(bookId: String!): User
`;

module.exports = typeDefs;