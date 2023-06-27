import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {IRegister} from '../../model';
import {useForm} from 'react-hook-form';
import {validateRegister} from '../../utils';

export default function useStepperRegister() {
  const navigation = useNavigation<any>();
  const [stepperState, setStepperState] = useState(1);
  const [phoneVal, setPhoneVal] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordSecret, setIsPasswordSecret] = useState(true);
  const [isPasswordSecret2, setIsPasswordSecret2] = useState(true);
  const [checkTerms, setCheckTerms] = useState(false);
  const [checkTerms2, setCheckTerms2] = useState(false);
  const [otpVal, setOtpVal] = useState('');
  const arrSteps = [1, 2, 3, 4];

  const formMethods = useForm<IRegister>({
    resolver: yupResolver(validateRegister),
  });

  function changePhoneVal(phoneVal: string, countryCode: string) {
    setCountryCode(countryCode);
    setPhoneVal(phoneVal);
    console.log({phoneVal, countryCode});
  }

  function changePasswordSecret() {
    setIsPasswordSecret(!isPasswordSecret);
  }

  function changePasswordSecret2() {
    setIsPasswordSecret2(!isPasswordSecret2);
  }

  function changeCheckTerms() {
    setCheckTerms(!checkTerms);
  }

  function changeCheckTerms2() {
    setCheckTerms2(!checkTerms2);
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

  function validatePhoneAndParse() {
    if (isLoading || phoneVal?.length! < 5) {
      return;
    }
    setIsLoading(true);
    setPhoneVal(e => e.replace(/\s+/g, ''));
    setStepperState(2);
    setIsLoading(false);
  }

  function handleSubmitRegister(data: IRegister) {
    console.log({data, isLoading});
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setStepperState(3);
    setIsLoading(false);
  }

  function otpCodeVerification() {
    if (otpVal.length < 4 || isLoading) {
      return;
    }
    setIsLoading(true);
    console.log('hola', otpVal);
    setIsLoading(false);
    navigation.navigate('UserList');
  }

  return {
    //state
    stepperState,
    arrSteps,
    isLoading,
    isPasswordSecret,
    isPasswordSecret2,
    checkTerms,
    checkTerms2,
    otpVal,
    phoneVal,
    countryCode,
    //methods
    formMethods,
    setOtpVal,
    //functions
    changeStepper,
    getGoBack,
    changePasswordSecret2,
    changePasswordSecret,
    validatePhoneAndParse,
    handleSubmitRegister,
    changeCheckTerms,
    changeCheckTerms2,
    otpCodeVerification,
    changePhoneVal,
  };
}
