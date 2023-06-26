import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ICredentialsLogin} from '../../model';
import {validateLogin} from '../../utils';

export default function useLogin() {
  const navigation = useNavigation<any>();
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<ICredentialsLogin>({
    resolver: yupResolver(validateLogin),
  });

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  function handleSubmitLogin(data: ICredentialsLogin) {
    console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
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
