import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation ADD($email:String!,$username:String!,$password:String!){
    register(
      email:$email
      username:$username
      password1:$password
      password2:$password
    ) {
      success
      errors
    }
  }
  `;
export const LOGIN_USER = gql`
mutation TOKEN($username:String!,$password:String!){
    tokenAuth(username:$username,password:$password){
      success
      errors
      token
      refreshToken
      
    }
  }`;