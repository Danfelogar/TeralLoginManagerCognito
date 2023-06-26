import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {IRegister} from '../../model';
import {useForm} from 'react-hook-form';
import {validateRegister} from '../../utils';

export default function useStepperRegister() {
  const navigation = useNavigation<any>();
  const [stepperState, setStepperState] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isPasswordSecret2, setIsPasswordSecret2] = useState(true);

  const arrSteps = [1, 2, 3, 4];

  const formMethods = useForm<IRegister>({
    resolver: yupResolver(validateRegister),
  });

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  function changePasswordSecret2() {
    setIsPasswordSecret2(!isPasswordSecret2);
  }

  function changeStepper(val: number) {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setStepperState(val);
    setIsLoading(false);
  }

  function getGoBack() {
    navigation.goBack();
  }

  function handleSubmitRegister(data: IRegister) {
    console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setIsLoading(false);
  }
  return {
    //state
    stepperState,
    arrSteps,
    isLoading,
    isPasswordSecret,
    isPasswordSecret2,
    //methods
    formMethods,
    //functions
    changeStepper,
    getGoBack,
    changePasswordSecret2,
    changePasswordSecret,
    handleSubmitRegister,
  };
}
