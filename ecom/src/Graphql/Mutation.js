import { gql } from "@apollo/client";

export const ADD_USER = gql `
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

export const LOGIN_USER = gql `
mutation TOKEN($username:String!,$password:String!){
    tokenAuth(username:$username,password:$password){
      success
      errors
      token      
    }
  }`;

export const VERIFY_TOKEN = gql `
mutation TOKEN($token:String!){
  verifyToken(token:$token){
		success
    errors
  }
}
`;
export const REFRESH_TOKEN = gql `
mutation REFRESH($token:String!){
  refreshToken(refreshToken:$token){
    success
    errors
    payload,
    token
  }
}
`;

export const UPDATE_ORDER = gql `
mutation updateOrder($id:ID!,$action:String!){
  updateOrder(id:$id,action:$action){
    items
  }
}
`
export const CASH_COMPLETE_ORDER = gql `
mutation cashcompleteorder($address:String!,$city:String!,$state:String!,$zipcode:String!,$total:Float!){
	cashCompleteOrder(address:$address,city:$city,state:$state,zipcode:$zipcode,total:$total){
    response
  }

}
`
export const UPDATE_WISHLIST = gql`
mutation ADD_WISHLIST($id:ID!){
  addWishList(id:$id){
    response
  } 
}
`

export const VERIFY_AUTH = gql`
mutation VERIFY($token:String!){
  verifyToken(token:$token){
    success
    errors
  }
  
}
`


// export const LOGIN_USER = gql`
// mutation TOKEN($username:String!,$password:String!){
//     tokenAuth(username:$username,password:$password){
//       success
//       errors
//       token
//       refreshToken

//     }
//   }`;