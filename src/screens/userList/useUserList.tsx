/* eslint-disable prettier/prettier */
import { Auth} from 'aws-amplify';
import {useContext, useEffect, useState} from 'react';
import {AuthContext, UIContext} from '../../context';


export default function useUserList() {
  //global context
   //global context
   const {
    changeStateTextError,
    changeSetTextError,
  } = useContext(UIContext);
  const {logout} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [userInformation, setUserInformation] = useState<string | null>(null);

  async function signOut() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await Auth.signOut()
      .then(() => {
        logout();
      })
      .catch(error => {
        console.warn('error signing out: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  async function getUsersCredentials() {
    await Auth.currentAuthenticatedUser()
    .then((res)=>{
      // console.log('x===>',{res});
      setUserInformation(JSON.stringify(res));
    })
    .catch(err => {
      console.warn({err});
      changeSetTextError(JSON.stringify(err));
      changeStateTextError();
    });
  }
  useEffect(() => {
    getUsersCredentials();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return {
    //state
    isLoading,
    userInformation,
    //methods
    //functions
    signOut,
  };
}
