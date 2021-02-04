import React, {useState,useEffect} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ME_QUERY } from '../Graphql/Queries';
import { isLoggedInVar } from '..';
import { REFRESH_TOKEN, VERIFY_TOKEN } from '../Graphql/Mutation';

export const useLoginHook = () => {
    const [login, setlogin] = useState(null);
    const {loading,data} = useQuery(ME_QUERY)
    const [refreshUser] = useMutation(REFRESH_TOKEN)
    if(loading){
        return console.log('ddd');
    }
    console.log(data.me);
    
    // useEffect(() => {
    //     if(data){
    //         isLoggedInVar(true)
    //     }
    //     else{
    //         const refresh = localStorage.getItem('refresh')
    //         const sent = async () => {
            
    //             const res =  await refreshUser({
    //                 variables:{token:refresh}
    //             }).catch(err =>console.log(err))
    //             console.log(res);
    //             if(res){
    //                 if(res.data.refreshToken.success){
    //                     localStorage.setItem('token',res.data.refreshToken.token)
    //                     isLoggedInVar(true)
    //                     setlogin(true)
    //                 }
    //                 else{
    //                     localStorage.setItem('token',null)
    //                     localStorage.setItem('refresh',null)
    //                     isLoggedInVar(false)
    //                     setlogin(false)
    //                 }
    //             }
    //         }
    //         sent()

    //     }
    // }, [])



    
    return(login)
}


// const LoginHook = () => {
//     const [login, setlogin] = useState(null);
//     useEffect(() => {
//         effect
//         return () => {
//             cleanup
//         };
//     }, [input]);
//     return (login);
// }

// export default LoginHook;

