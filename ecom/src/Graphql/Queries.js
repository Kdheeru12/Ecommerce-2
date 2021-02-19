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
export const ALL_CART = gql`
query{
  allCartitems{
    id
    product {
      id
      name
      image
    }
    quantity
    price
    totalPrice
  }
    
}
`

