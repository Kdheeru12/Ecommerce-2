import React from 'react'
import { gql, useQuery } from '@apollo/client';
import {ME_QUERY} from './Graphql/Queries'
import { useLoginHook } from './Users/LoginHook';
const GET_USERS = gql`{
    allUsers{
      email
    }
}
`;
export default function Test() {
  const login = useLoginHook()
    const { loading, error, data } = useQuery(ME_QUERY);
      if (loading) return <h1>loading</h1>;
      if (error) return <h1>error</h1>;
      console.log(data);
      return (
        <div>
          <h1>
            d
          </h1>
        </div>
    );
}
