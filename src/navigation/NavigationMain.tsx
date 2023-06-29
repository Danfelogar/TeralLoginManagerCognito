import {createStackNavigator} from '@react-navigation/stack';
import {IncomeOptions, Login, StepperRegister, UserList} from '../screens';
import {useContext} from 'react';
import {AuthContext} from '../context';

const Stack = createStackNavigator<any>();

export default function NavigationMain() {
  //globalContext
  const {isLoggedIn} = useContext(AuthContext);

  // useEffect(() => {
  //   if (isLoggedIn !== 'pending') {
  //     SplashScreen.hide();
  //   }
  // }, [isLoggedIn]);

  if (isLoggedIn === 'pending') {
    return <></>;
  }

  return (
    <Stack.Navigator
      // initialRouteName="IncomeOptions"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      {isLoggedIn === 'logout' && (
        <>
          <Stack.Screen name="IncomeOptions" component={IncomeOptions} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="StepperRegister" component={StepperRegister} />
        </>
      )}
      {isLoggedIn === 'login' && (
        <>
          <Stack.Screen name="UserList" component={UserList} />
        </>
      )}
    </Stack.Navigator>
  );
}
