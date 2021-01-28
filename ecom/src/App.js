import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import ProductList from './components/Cart';
import Login from './Users/Login';
import Layout from './covers/Layout';

function App() {
  return (
      <Router>
        <Layout>
          
        <Switch>
        
          <Route path='/' component={ProductList}/>
        </Switch>
        
        </Layout>
      </Router>
  );
}

export default App;

// {
//   "name": "ecom",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@testing-library/jest-dom": "^5.11.9",
//     "@testing-library/react": "^11.2.3",
//     "@testing-library/user-event": "^12.6.2",
//     "file-loader": "^6.2.0",
//     "html-webpack-plugin": "^4.5.1",
//     "identity-obj-proxy": "^3.0.0",
//     "mini-css-extract-plugin": "^1.3.4",
//     "node-sass": "^4.14.1",
//     "optimize-css-assets-webpack-plugin": "^5.0.4",
//     "postcss-flexbugs-fixes": "^5.0.2",
//     "postcss-loader": "^4.2.0",
//     "postcss-preset-env": "^6.7.0",
//     "postcss-safe-parser": "^5.0.2",
//     "react": "^17.0.1",
//     "react-dom": "^17.0.1",
//     "react-helmet": "^6.1.0",
//     "react-hook-form": "^6.14.2",
//     "react-router-dom": "^5.2.0",
//     "react-scripts": "4.0.1",
//     "url-loader": "^4.1.1",
//     "web-vitals": "^0.2.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
