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
    bookId: 
    authors: String
    description: String
    title: String
    image: 
    link: 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {

  }

  type Mutation {
 
`;

module.exports = typeDefs;