import {useNavigation} from '@react-navigation/native';

export default function useIncomeOptions() {
  const navigation = useNavigation<any>();
  function getLogin() {
    navigation.navigate('Login');
  }
  return {
    //state
    //methods
    //functions
    getLogin,
  };
}
