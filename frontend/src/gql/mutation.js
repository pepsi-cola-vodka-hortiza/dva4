import { gql } from "@apollo/client";

export const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

export const CREATE_NOTE = gql`
  mutation createNote($content: String!) {
    createNote(content: $content) {
      id
      content
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
      favoriteCount
      createdAt
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($updateNoteId: ID!, $content: String!) {
    updateNote(id: $updateNoteId, content: $content)
  }
`;

export const SIGNUP_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

export const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      favoriteCount
      favoritedBy {
        id
        username
      }
    }
  }
`;
