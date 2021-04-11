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
export const SEARCH = gql`
query Search($query:String!){
  getSearch(q:$query) {
    id
    name
    price
    image 
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
export const GET_ORDER = gql`
query GetOrder($id:ID!){
  getOrder(id:$id){
    id
    ordertotal
    transactionId
    orderitemSet {
      product {
        id
        name
        price
        image
        
      }
      quantity
      price
      totalPrice
    }
    shippingaddressSet{
      address
      city
      zipcode
      state
      phone
    }
  }
}
`
export const GET_ORDERS = gql`
query GetOrders{
  getOrder {
  id
  dateOrderd
  transactionId
  ordertotal
  acceptorder
  declineorder
}
}
`
