import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {NavigationMain} from './src/navigation';
import {ThemeProvider, UIProvider} from './src/context';
import {Amplify} from 'aws-amplify';
import {withOAuth} from 'aws-amplify-react-native';

import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

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
  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
}

export default withOAuth(App);
