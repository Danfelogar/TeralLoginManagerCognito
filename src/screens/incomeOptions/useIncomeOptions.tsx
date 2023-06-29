import {useNavigation} from '@react-navigation/native';

export default function useIncomeOptions() {
  const navigation = useNavigation<any>();
  function getLogin() {
    navigation.navigate('Login');
  }
  function getRegister() {
    navigation.navigate('StepperRegister');
  }
  return {
    //state
    //methods
    //functions
    getLogin,
    getRegister,
  };
}
