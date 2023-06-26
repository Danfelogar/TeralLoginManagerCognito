import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {NavigationMain} from './src/navigation';
import {ThemeProvider} from './src/context';
function App(): JSX.Element {
  return (
    <AppState>
      <NavigationContainer>
        <NavigationMain />
      </NavigationContainer>
    </AppState>
  );
}

function AppState({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default App;
