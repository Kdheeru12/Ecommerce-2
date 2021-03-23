import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink,from,makeVar } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import Error from './covers/Error';
import { setContext } from '@apollo/client/link/context';
import * as ServiceWorker from './serviceworker'
export  const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
      <Error/>
    );

  else if (networkError)
  console.log(`[Network error]: ${networkError}`);

});

export const isLoggedInVar = makeVar(!!localStorage.getItem("token"));

const link = from([
  errorLink,
  new HttpLink({uri:'http://127.0.0.1:8000/graphl'}),
])
 
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token') || "" 
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : null,
  }
}
});

const client = new ApolloClient({ 
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          },
        }
      }
    }
  }),
  link: authLink.concat(link),
  headers: {
    authorization: localStorage.getItem('token')
    ? 'JWT ' + localStorage.getItem('token')
    :null,
  },

})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker.register()

