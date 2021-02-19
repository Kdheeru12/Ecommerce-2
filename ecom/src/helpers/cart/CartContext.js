import React, { useState, useEffect,useReducer } from 'react';
import Context from './index';
import { toast } from 'react-toastify'
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ORDER } from '../../Graphql/Mutation';
import { ALL_CART } from '../../Graphql/Queries';

// const GetLocalCartItems = () => {
//   const [delayProduct,setDelayProduct] = useState(true)
//   const [cart, setcart] = useState([]);
//   var { loading, data,error } =  useQuery(ALL_CART);
//   if(error){
//     console.log('de');
//   }
//   if(loading){
//     console.log('loading');
//   }
//   useEffect(() => {
//     if (!loading) {
//       console.log(data)
//       setcart(data.allCartitems)
//     } else {
//         console.log('not')
//     }
//     setTimeout(() => {
//         setDelayProduct(false)  
//     }, 5000);

// }, [delayProduct])
//   console.log(cart);
//   return JSON.stringify(cart)
// };


const CartProvider = (props) => {
  const [delayProduct,setDelayProduct] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [ayerror,setayerror] = useState(null)
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState('InStock');
  const [updateCart] = useMutation(UPDATE_ORDER);
  // console.log(cartItems)
  const { loading, data,error,refetch } =  useQuery(ALL_CART);
  // useEffect(() => {
    
  //   // const Total = cartItems.reduce((a, b) => +a + +b.total, 0)
  //   // setCartTotal(Total);

  //   // localStorage.setItem('cartList', JSON.stringify(cartItems))

    
  // }, [])



  // Add Product To Cart
  const addToCart = async (item ,action) => {
    // toast.success("Product Added Successfully !");

    // const index = cartItems.findIndex(itm => itm.id === item.id)
    // if (index !== -1) {
    //   const product = cartItems[index];
    //   cartItems[index] = { ...item, ...item, qty: quantity, total:(item.price - (item.price * item.discount / 100)) * quantity };
    //   setCartItems([...cartItems])
    // } else {
    //   const product = { ...item, qty: quantity, total: (item.price - (item.price * item.discount / 100)) }
    //   setCartItems([...cartItems, product])
    // }            
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
//   const removeFromCart = (item) => {
//     toast.error("Product Removed Successfully !");
//     setCartItems(cartItems.filter((e) => (e.id !== item.id)))
//   }

//   const minusQty = () => {
//     if (quantity > 1) {
//         setQuantity(quantity - 1);
//         setStock('InStock')
//     }
// }

//   const plusQty = (item) => {
//     if (item.stock >= quantity) {
//       setQuantity(quantity + 1)
//     } else {
//       setStock("Out of Stock !")
//     }
//   }

//    // Update Product Quantity
//    const updateQty = (item, quantity) => {
//     if(quantity >= 1 ){
//       const index = cartItems.findIndex(itm => itm.id === item.id)
//       if(index !== -1){
//         const product = cartItems[index];
//         cartItems[index] = { ...product, ...item, qty: quantity, total: item.price * quantity  }; 

//         setCartItems([...cartItems])
//         toast.info("Product Quantity Updated !");
//       }else{
//         const product = {...item, qty: quantity, total: (item.price - (item.price * item.discount / 100)) * quantity }
//         setCartItems([...cartItems, product])
//         toast.success("Product Added Updated !");
//       }
//     }else{
//       toast.error("Enter Valid Quantity !");
//     }
//   }

//   const { value } = props;
  return (
    <Context.Provider
      value={{
        // ...props,
        // state: cartItems, cartTotal,setQuantity ,quantity,stock,
        addToCart: addToCart,
        cartItems:cartItems
        // removeFromCart: removeFromCart,
        // plusQty: plusQty,
        // minusQty:minusQty,
        // updateQty:updateQty
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default CartProvider;