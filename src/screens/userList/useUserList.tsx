/* eslint-disable prettier/prettier */
import { Auth} from 'aws-amplify';
import {useContext, useEffect, useState} from 'react';
// import {USER_POOL_ID, REGION_KEY, ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '@env';

import {AuthContext, UIContext} from '../../context';
import { useNavigation } from '@react-navigation/native';
import AWS from 'aws-sdk';
import { IUsersListPool } from '../../model/IUsersListPool';

export default function useUserList() {
   //global context
  const {
    changeStateTextError,
    changeSetTextError,
  } = useContext(UIContext);
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);
  // const [userInformation, setUserInformation] = useState<string | null>(null);
  const [usersListPool, setUsersListPool] = useState<IUsersListPool[]>([]);
  async function signOut() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await Auth.signOut()
      .then(() => {
        logout();
            navigation.navigate('IncomeOptions');
      })
      .catch(error => {
        console.warn('error signing out: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  // async function getUsersCredentials() {
  //   await Auth.currentAuthenticatedUser()
  //   .then((res)=>{
  //     // console.log('x===>',{res});
  //     setUserInformation(JSON.stringify(res));
  //   })
  //   .catch(err => {
  //     console.warn({err});
  //     changeSetTextError(JSON.stringify(err));
  //     changeStateTextError();
  //   });
  // }


    const getUsers = async () => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      try {
        let allUsers:any[] = [];
        let more = true;
        let paginationToken = '';

        while (more) {
          let params:any = {
            UserPoolId: 'USER_POOL_ID',
            Limit: 60,
          };
          if (paginationToken !== '') {
            params.PaginationToken = paginationToken;
          }

          AWS.config.update({
            region: 'REGION_KEY',
            accessKeyId: 'ACCESS_KEY_ID',
            secretAccessKey: 'SECRET_ACCESS_KEY',
          });
          const cognito = new AWS.CognitoIdentityServiceProvider();
          const rawUsers = await cognito.listUsers(params).promise();
          allUsers = allUsers.concat(rawUsers.Users);
          if (rawUsers.PaginationToken) {
            paginationToken = rawUsers.PaginationToken;
          } else {
            more = false;
          }
        }
        setUsersListPool(allUsers);
      } catch (err) {
        console.warn({err});
        changeSetTextError(JSON.stringify(err));
        changeStateTextError();
      } finally {
        setIsLoading(false);
      }
    };

  useEffect(() => {
    // getUsersCredentials();
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    //state
    isLoading,
    usersListPool,
    // userInformation,
    //methods
    //functions
    signOut,
    getUsers,
  };
}
