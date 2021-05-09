import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import ProductList from './components/Cart';
import Login from './Users/Login';
import Layout from './covers/Layout';
import Signup from './Users/Signup';
import ProductHome from './components/ProductsHome';
import CartProvider from './helpers/cart/CartContext';
import Cart from './components/Cart';
import OrderSuccess from './components/Order-success';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import Search from './components/Search';
import Myorderd from './components/Myorders';
import OrderDetails from './components/Order-details';
// import ProductAdmin from './Dashboard/ProductAdmin';

function App() {
  console.log(process.env);
  return (
      <Router>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <CartProvider>
          <Layout>
          <Route exact path='/' component={ProductHome}/>
          <Route path='/products' component={ProductHome}/>
          <Route path='/:id/product-detail' component = {ProductDetail} />
          <Route path='/cart' component={Cart} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/ordersuccess' component={OrderSuccess} />
          <Route path='/search' component={Search}/>
          <Route path='/myorders' component={Myorderd} />
          <Route path='/:id/order-detail' component={OrderDetails} />
          </Layout>
          </CartProvider>
        </Switch>
      </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import Checkout from './components/Checkout';
// import ProductList from './components/Cart';
// import Login from './Users/Login';
// import Layout from './covers/Layout';
// import Signup from './Users/Signup';
// import { gql, useQuery } from '@apollo/client';

// const GET_USERS = gql`{
//     allUsers{
//       email
//     }
// }
// `;
// function App() {
//   const { loading, error, data } = useQuery(GET_USERS);
//   if (loading) return <h1>loading</h1>;
//   if (error) return <h1>error</h1>;
//   console.log(data.allUsers);
//   return (
//     <div>
//       <h1>
//         d
//       </h1>
//     </div>
//   );
// }



// export default App;
