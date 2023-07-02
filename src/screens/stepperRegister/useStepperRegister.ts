import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {IRegister} from '../../model';
import {useForm} from 'react-hook-form';
import {validateRegister} from '../../utils';
import {Auth, Hub} from 'aws-amplify';
import {AuthContext, UIContext} from '../../context';

export default function useStepperRegister() {
  //global context
  const {
    changeStateTextError,
    changeSetTextError,

    changeStateTextSuccessful,
    changeSetTextSuccessful,
  } = useContext(UIContext);
  const {login, loginFail} = useContext(AuthContext);
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
  const [username, setUsername] = useState('');
  const arrSteps = [1, 2, 3, 4];
  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          // setUsername(data.username);
          login();
          // console.log({event, data}, '1======>', data.username);
          break;
        case 'signOut':
          loginFail();
          break;
        case 'signIn_failure':
          console.warn('Sign in failure', data);
          changeSetTextError(JSON.stringify(data));
          changeStateTextError();
          loginFail();
          break;
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formMethods = useForm<IRegister>({
    resolver: yupResolver(validateRegister),
  });

  function changePhoneVal(phoneVal: string, countryCode: string) {
    setCountryCode(countryCode);
    setPhoneVal(phoneVal);
    // console.log({phoneVal, countryCode});
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

  //register social media
  function socialMediaRegister(functionMedia: () => void) {
    if (!checkTerms || !checkTerms2) {
      changeSetTextError('Acepta todos los términos y condiciones.');
      return changeStateTextError();
    }
    functionMedia();
  }

  //Register
  async function handleSubmitRegister(data: IRegister) {
    // console.log({data, isLoading, phoneVal, countryCode});
    if (!checkTerms || !checkTerms2) {
      changeSetTextError('Acepta todos los términos y condiciones.');
      return changeStateTextError();
    }
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    setUsername(data.username);
    let dataAWS = {
      username: data.username,
      password: data.password,
      attributes: {
        name: data.username,
        email: data.email,
        phone_number: `${countryCode}${phoneVal}`,
        // custom: {
        //   'custom:code_country': countryCode,
        // },
      },
      autoSignIn: {
        enabled: true,
      },
    };
    await Auth.signUp(dataAWS)
      .then(() => {
        // console.log({res}, 'x----->', res.user);
        setStepperState(3);
      })
      .catch(err => {
        console.warn({err});
        changeSetTextError(JSON.stringify(err));
        changeStateTextError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Re-send signup
  async function resendConfirmationCode() {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    await Auth.resendSignUp(username)
      .then(() => {
        changeSetTextSuccessful('Código enviado revise su buzón de mensajes.');
        changeStateTextSuccessful();
      })
      .catch(err => {
        console.warn({err});
        changeSetTextError(JSON.stringify(err));
        changeStateTextError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Confirm Register
  async function otpCodeVerification() {
    if (otpVal.length < 4 || isLoading) {
      return;
    }
    setIsLoading(true);
    await Auth.confirmSignUp(username, otpVal)
      .then(() => {
        Hub.listen('auth', ({payload}) => {
          const {event} = payload;
          if (event === 'autoSignIn') {
            // assign user
            login();
            // navigation.navigate('UserList');
          } else if (event === 'autoSignIn_failure') {
            // redirect to sign in page
          }
        });
      })
      .catch(err => {
        console.warn({err});
        changeSetTextError(JSON.stringify(err));
        changeStateTextError();
        loginFail();
      })
      .finally(() => {
        setIsLoading(false);
      });
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
    resendConfirmationCode,
    changePhoneVal,
    socialMediaRegister,
  };
}
