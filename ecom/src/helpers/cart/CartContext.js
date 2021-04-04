import React, { useState, useEffect} from 'react';
import Context from './index';
import { toast } from 'react-toastify'
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ORDER, UPDATE_WISHLIST, VERIFY_AUTH } from '../../Graphql/Mutation';
import { ALL_CART } from '../../Graphql/Queries';
import { useHistory } from 'react-router';
import { isLoggedInVar } from '../..';



const CartProvider = (props) => {
  const [delayProduct,setDelayProduct] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [wishlist, setwishlist] = useState([])
  const [ayerror,setayerror] = useState(null)
  // const [cartTotal, setCartTotal] = useState(0);
  // const [quantity, setQuantity] = useState(1);
  // const [stock, setStock] = useState('InStock');
  const [search, setsearch] = useState(" ");
  const [updateCart] = useMutation(UPDATE_ORDER);
  const [updatewishlist] = useMutation(UPDATE_WISHLIST)
  const [verifyauth] = useMutation(VERIFY_AUTH)
  // console.log(cartItems)
  const { loading, data,error,refetch } =  useQuery(ALL_CART);
  const history = useHistory()

// const verify = async () =>{
//   const token = localStorage.getItem('token')
//   if(token != null){
//     const ver = await verifyauth({
//       variables:{token:token}
//     }).catch(err =>setayerror(err))
//     if(ver){
//       console.log(ver.data.verifyToken)
//       if(ver.data.verifyToken.success){
//         setauth(true)
//       }
//     }
    
//   }

// }


  // Add Product To Cart
const addToCart = async (item ,action) => {
        
      const res =  await updateCart({
          variables:{id:item,action:action}
      }).catch(err =>{
        setayerror(err)
        isLoggedInVar(false)
        history.push('/login')    
      })
      if (res){
        // console.log(data.allCartitems);
        toast.success(`Product ${action}ed Successfully !`,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          Transition:"Slide",
          Delay:'5000'
          });
        refetch()
        setayerror(null)
      }


  }
const addtowish = async(id) =>{
    const resp = await updatewishlist({
      variables:{id:id}
    }).catch(err=>{
    setayerror(err)
    isLoggedInVar(false)
    history.push('/login')}
    )
    if(resp){
      toast.success(`Product ${resp.data.addWishList.response} to wishlist`,{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        Transition:"Slide",
        Delay:'3000'
        });
      refetch()
      setayerror(null)
    }
    // console.log(ayerror)
    if(ayerror){
      isLoggedInVar(false)
      history.push('/login')
    }

}

useEffect(() => {
  if(error){
    // console.log(error)
    isLoggedInVar(false)
    history.push('/login')
  }
  else{
    if(loading){
      console.log('loading');
    }
    if (!loading) {
        // console.log(data)
        setCartItems(data.allCartitems)
        setwishlist(data.allWishlistitems)
      } else {
          console.log('not')
      }
      setTimeout(() => {
          setDelayProduct(false)  
      }, 5000);
  }


}, [delayProduct,addToCart,addtowish])
if(cartItems){
  var a = cartItems.map((items) =>Number(items.totalPrice))
  // console.log(a);
  
  
  a= a.reduce((a, b) => a + b, 0)
  var b = cartItems.map((item) => item.quantity)
  b = b.reduce((a,b)=>a+b,0)
  
}
if (wishlist){
   var l = wishlist.map((item)=>(item.product.id))
  // console.log(l)
}

// console.log(search);
  return (
    <Context.Provider
      value={{
        // ...props,
        // state: cartItems, cartTotal,setQuantity ,quantity,stock,
        addToCart: addToCart,
        cartItems:cartItems,
        cartTotal:a,
        TotalItems:b,
        search:search,
        setsearch:setsearch,
        wishlist:wishlist,
        wishitems :l,
        addtowish:addtowish,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;