import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import ProductList from './components/Cart';
import Login from './Users/Login';
import Layout from './covers/Layout';
import Signup from './Users/Signup';
import test from './test';
import ProductHome from './components/ProductsHome';

function App() {
  return (
      <Router>
        <Layout>
        <Switch>
          <Route exact path='/' component={test}/>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/products' component={ProductHome}/>
        </Switch>
        </Layout>
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
