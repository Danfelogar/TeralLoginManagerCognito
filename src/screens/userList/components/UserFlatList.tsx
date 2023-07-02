import React, {useContext} from 'react';
import {FlatList, RefreshControl, StatusBar} from 'react-native';
import {IUserFlitList} from '../types';
import {ThemeContext} from '../../../context';
import {CardUser} from './CardUsers';

export default function UserFlatList({
  users,
  isLoading,
  onTryAgain,
  initialNumToRender,
  maxToRenderPerBatch,
}: IUserFlitList): JSX.Element {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <FlatList
      data={isLoading ? [] : users}
      contentContainerStyle={{
        minHeight: 150,
        paddingTop: StatusBar.currentHeight || 42,
      }}
      onRefresh={onTryAgain}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onTryAgain}
          colors={[colors.orange]}
          tintColor={colors.orange}
        />
      }
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      //   onEndReached={onEndReached}
      //   onEndReached={(prop)=>{
      //     setPage((page)=> page + 1);
      // }}
      keyExtractor={item => item.Username.toString()}
      renderItem={({item: user, index}) => (
        <CardUser user={user} idx={index} key={index} />
      )}
      // ListFooterComponent={
      //   data.length > (initialNumToRender ?? 0)
      //     ? ListFooter({
      //         allDataRendered,
      //         goToTop,
      //         showGotoTopButton,
      //       })
      //     : null
      // }
      //   ListEmptyComponent={ListEmpty({
      //     onTryAgain,
      //     isLoading,
      //   })}
    />
  );
}
