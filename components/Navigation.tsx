import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallsScreen from '../pages/CallsScreen';
import ChatsScreen from '../pages/ChatsScreen';
import FriendsScreen from '../pages/FriendsScreen';
import StatusScreen from '../pages/StatusScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import RoomChat from '../pages/RoomChat';
import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';
import ChatContext from '../context/Chat';
import HeaderRight from './RoomChat/HeaderRight';
import HeaderLeft from './RoomChat/HeaderLeft';
import Menu from './Menu';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ChatStack() {
  const {state, dispatch} = useContext(ChatContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chats"
        options={{headerLeft: () => <></>, headerRight: Menu}}
        component={TabNav}
      />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={{
          title: state.openSearch ? '' : 'Gladys',
          headerRight: HeaderRight,
          headerLeft: HeaderLeft,
        }}
      />
    </Stack.Navigator>
  );
}
function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const routeIcon: any = {
            ChatTab: 'chatbubbles',
            Calls: 'call',
            Status: 'aperture',
            Friends: 'people',
          };
          return (
            <Icon
              name={routeIcon[route.name]}
              size={32}
              color={focused ? 'blue' : '#c4c4c4'}
            />
          );
        },
      })}>
      <Tab.Screen
        name="ChatTab"
        component={ChatsScreen}
        options={{title: 'Chats', headerShown: false}}
      />
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{title: 'Calls'}}
      />
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{title: 'Status'}}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{title: 'Friends'}}
      />
    </Tab.Navigator>
  );
}
export default function Navigator() {
  return <ChatStack />;
}
