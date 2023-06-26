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

  const arrSteps = [1, 2, 3, 4];

  const formMethods = useForm<IRegister>({
    resolver: yupResolver(validateRegister),
  });
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
  return {
    //state
    stepperState,
    arrSteps,
    isLoading,
    //methods
    formMethods,
    //functions
    changeStepper,
    getGoBack,
  };
}
