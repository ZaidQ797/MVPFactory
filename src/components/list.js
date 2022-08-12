import React from 'react';
import {FlatList, RefreshControl, View, Text} from 'react-native';
import colors from '../utils/colors';
import Input from './input';
const List = ({
  data,
  renderItem,
  numColumns,
  handleOnRefresh,
  refreshing = false,
  listFooterComponent,
  onEndReached,
  onMomentumScrollBegin,
  flatlistRef,
  onScroll,
  keyExtractor,
  myKey,
  showShowSearchBar = true,
  onChangeText,
  inputValue,
}) => {
  return (
    <FlatList
      key={myKey}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      onScroll={onScroll}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderFooter={listFooterComponent}
      ListHeaderComponent={
        showShowSearchBar && (
          <Input onChangeText={onChangeText} value={inputValue} />
        )
      }
      renderItem={({item, index}) => renderItem(item, index)}
      refreshing={refreshing}
      ref={flatlistRef}
      onMomentumScrollBegin={onMomentumScrollBegin}
      bounces={Platform.OS === 'ios' ? true : false}
      refreshControl={
        <RefreshControl
          tintColor={colors.primary}
          refreshing={refreshing}
          onRefresh={handleOnRefresh}
        />
      }
    />
  );
};

export default List;
