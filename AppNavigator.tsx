/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatsScreen from './pages/ChatsScreen';
import CallsScreen from './pages/CallsScreen';
import StatusScreen from './pages/StatusScreen';
import FriendsScreen from './pages/FriendsScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';

type RootStackParamList = {
  Home: undefined;
  Chats: undefined;
  Calls: undefined;
  Friends: undefined;
  Status: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Chats'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Calls" component={CallsScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
