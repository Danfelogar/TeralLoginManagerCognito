import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import {useContext, useEffect} from 'react';
import {ThemeContext} from '../../context';
import stylesUserList from './stylesUserList';
import {Auth} from 'aws-amplify';

export default function UserList() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {containerUserList, containerBackgroundPoints} = stylesUserList({
    colors,
  });
  async function x() {
    const user = await Auth.currentAuthenticatedUser();
    const groups = user.client;
    // groups.includes('admin');
    console.log({groups});
  }
  useEffect(() => {
    x();
  }, []);

  return (
    <View style={containerUserList}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.purple}
          showHideTransition="slide"
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <Image
          source={require('../../assets/login/backgroundPointers.png')}
          style={containerBackgroundPoints}
        />
        <Text>users lists</Text>
      </SafeAreaView>
    </View>
  );
}
