import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ICredentialsLogin} from '../../model';
import {validateLogin} from '../../utils';
import {Auth} from 'aws-amplify';
import {useContext} from 'react';
import {UIContext} from '../../context';

export default function useLogin() {
  const {changeStateTextError, changeSetTextError} = useContext(UIContext);
  const navigation = useNavigation<any>();
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<ICredentialsLogin>({
    resolver: yupResolver(validateLogin),
  });

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  async function handleSubmitLogin(data: ICredentialsLogin) {
    console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await Auth.signIn(data.username, data.password)
      .then(() => {
        navigation.navigate('UserList');
      })
      .catch(err => {
        console.warn({err});
        changeSetTextError(err);
        changeStateTextError();
      })
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(false);
  }

  function getStepperRegister() {
    navigation.navigate('StepperRegister');
  }

  return {
    //state
    isPasswordSecret,
    isLoading,
    //methods
    formMethods,
    //functions
    getStepperRegister,
    changePasswordSecret,
    handleSubmitLogin,
  };
}
