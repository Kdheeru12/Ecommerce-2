import React, { useState, useEffect,useReducer } from 'react';
import Context from './index';
import { toast } from 'react-toastify'
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ORDER } from '../../Graphql/Mutation';
import { ALL_CART } from '../../Graphql/Queries';



const CartProvider = (props) => {
  const [delayProduct,setDelayProduct] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [ayerror,setayerror] = useState(null)
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState('InStock');
  const [search, setsearch] = useState(" ");
  const [updateCart] = useMutation(UPDATE_ORDER);
  // console.log(cartItems)
  const { loading, data,error,refetch } =  useQuery(ALL_CART);




  // Add Product To Cart
  const addToCart = async (item ,action) => {
        
      const res =  await updateCart({
          variables:{id:item,action:action}
      }).catch(err =>setayerror(err))
      // console.log('fff');
      // console.log(res);
      if (res){
        console.log(data.allCartitems);
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
      console.log(ayerror)

  }
useEffect(() => {
  if(error){
    console.log('de');
  }
  if(loading){
    console.log('loading');
  }
  if (!loading) {
      // console.log(data)

      setCartItems(data.allCartitems)
    } else {
        console.log('not')
    }
    setTimeout(() => {
        setDelayProduct(false)  
    }, 5000);

}, [delayProduct,addToCart])
console.log(cartItems);
if(cartItems){
  var a = cartItems.map((items) =>Number(items.totalPrice))
  console.log(a);
  
  
  a= a.reduce((a, b) => a + b, 0)
  var b = cartItems.map((item) => item.quantity)
  b = b.reduce((a,b)=>a+b,0)
  
}


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
        setsearch:setsearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;