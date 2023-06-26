import {createStackNavigator} from '@react-navigation/stack';
import {IncomeOptions, Login, StepperRegister} from '../screens';

const Stack = createStackNavigator<any>();

export default function NavigationMain() {
  return (
    <Stack.Navigator
      // initialRouteName="IncomeOptions"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      <Stack.Screen name="IncomeOptions" component={IncomeOptions} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="StepperRegister" component={StepperRegister} />
    </Stack.Navigator>
  );
}
