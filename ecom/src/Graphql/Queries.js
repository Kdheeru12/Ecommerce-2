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
  allWishlistitems {
    id
    product {
      id
      name
      image
      price
    }
  	dateAdded
  }
    
}
`
export const ALL_SEARCH_PRODUCTS = gql`
query{
  searchProducts(name_Icontains:"a") {
    edges {
      node {
          id
        name
        price
        image
      }
    }
  }
  allProducts{
      id
      name
      price
      image
  }
}
`
export const SEARCH_PRODUCTS = gql`
query search($name:String!){
  searchProducts(name_Icontains:$name) {
    edges {
      node {
          id
        name
        price
        image
      }
    }
  }
}
`

export const ALL_ORDER_ITEMS = gql`

query allorderitems($id:ID!){
  allOrderitems(id:$id){
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
export const GET_PRODUCT = gql`
query getproduct($id:ID!){
  getProduct(id:$id){
    id
    name
    price
    avail
    image
    wishlistitemSet{
      id
    }
  }
}
`
export const ALL_WISHLIST = gql`
query{
  allWishlistitems {
    id
    product {
      id
      name
      image
      price
    }
  	dateAdded
  }
}
`
