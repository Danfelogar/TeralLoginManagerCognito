import {View, StatusBar, SafeAreaView, Platform, Image} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import {useContext} from 'react';
import {ThemeContext, UIContext} from '../../context';
import stylesUserList from './stylesUserList';
import {Button, Snackbar} from '../../components';
import useUserList from './useUserList';
import {heightFullScreen} from '../../utils';
import {UserFlatList} from './components';

export default function UserList() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {isOpenTextError, changeStateTextError, changeSetTextError, textError} =
    useContext(UIContext);
  //customStyles
  const {containerUserList, containerBackgroundPoints, btnLogout} =
    stylesUserList({
      colors,
    });
  //logic
  const {
    //state
    isLoading,
    usersListPool,
    // userInformation,
    //methods
    //functions
    signOut,
    getUsers,
  } = useUserList();
  return (
    <View style={containerUserList}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={colors.purple}
          showHideTransition="slide"
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <Image
          source={require('../../assets/login/backgroundPointers.png')}
          style={containerBackgroundPoints}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end',
            marginBottom: 19,
          }}>
          <Button
            isLoading={isLoading}
            colorSpinierLoading={colors.grayLight1}
            buttonStyle={{
              ...btnLogout,
              // width: widthFullScreen * 0.153,
            }}
            activeOpacity={0.9}
            onPress={signOut}
            firstIcon={
              <IconMaterialCommunityIcons
                name="logout"
                size={heightFullScreen / 34}
                color={colors.black}
              />
            }
          />
        </View>
        <UserFlatList
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          isLoading={isLoading}
          users={usersListPool}
          onTryAgain={getUsers}
        />
        {isOpenTextError && textError && (
          <Snackbar
            bgColor={colors.red}
            styled={{
              bottom: 0,
            }}
            isOpen={isOpenTextError}
            msmText={textError}
            handleChangeSnackbar={() => {
              changeStateTextError();
              changeSetTextError(null);
            }}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
