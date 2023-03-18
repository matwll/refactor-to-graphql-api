import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: username, email: email, password: password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookInfo: BookInfo!) {
    saveBook(bookInfo: $BookInfo) {
      token
      user {
        _id
        username
        savedBooks {
          bookId
        }
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;
