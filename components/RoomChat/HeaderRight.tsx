import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatContext from '../../context/Chat';

const HeaderRight = () => {
  const {state, dispatch} = useContext(ChatContext);

  const phoneButton = () => {
    return <Icon name="call-outline" size={24} />;
  };
  const searchButton = () => {
    return (
      <TouchableOpacity
        onPress={() => dispatch({type: 'SET_OPEN_SEARCH', payload: true})}>
        <Icon name="search-outline" size={24} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{width: '100%', paddingRight: 16}}>
      {!state.openSearch ? (
        <View
          style={{flexDirection: 'row', gap: 12, justifyContent: 'flex-end'}}>
          {searchButton()}
          {phoneButton()}
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            placeholder="Search..."
            style={{
              borderWidth: 1,
              borderBottomColor: 'black',
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              flex: 1,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Icon name="chevron-up-outline" size={24} />
            <Icon name="chevron-down-outline" size={24} />
          </View>
        </View>
      )}
    </View>
  );
};
export default HeaderRight;
