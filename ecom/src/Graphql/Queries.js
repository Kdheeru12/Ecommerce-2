import { gql } from "@apollo/client";

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const ME_QUERY = gql`
    query{
        me{
        firstName
        email
        username
    }
}
`;

export const ALL_PRODUCTS = gql`
query{
  allProducts{
    id
    name
    price
    image
  }
  }
`