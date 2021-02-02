import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`{
    allUsers{
      email
    }
}
`;
export default function Test() {
    const { loading, error, data } = useQuery(GET_USERS);
      if (loading) return <h1>loading</h1>;
      if (error) return <h1>error</h1>;
      console.log(data.allUsers);
      return (
        <div>
          <h1>
            d
          </h1>
        </div>
    );
}
