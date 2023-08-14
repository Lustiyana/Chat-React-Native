import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.bottomButtonBar}>
      <Button title="Chats" onPress={() => navigation.navigate('Chats')} />
      <Button title="Calls" onPress={() => navigation.navigate('Calls')} />
      <Button title="Friends" onPress={() => navigation.navigate('Friends')}  />
      <Button title="Status" onPress={() => navigation.navigate('Status')} />
    </View>
  );
};
const styles = StyleSheet.create({
  bottomButtonBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default HomeScreen;
