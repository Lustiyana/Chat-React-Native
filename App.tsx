/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Navigator from './components/Navigation';
import ChatProvider from './provider';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Chats" component={ChatsScreen} />
    //     <Stack.Screen name="Calls" component={CallsScreen} />
    //     <Stack.Screen name="Status" component={StatusScreen} />
    //     <Stack.Screen name="Friends" component={FriendsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ChatProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ChatProvider>
  );
};

export default App;
