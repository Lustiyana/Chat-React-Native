import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallsScreen from '../pages/CallsScreen';
import ChatsScreen from '../pages/ChatsScreen';
import FriendsScreen from '../pages/FriendsScreen';
import StatusScreen from '../pages/StatusScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import RoomChat from '../pages/RoomChat';
import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from '../pages/auth/LoginScreen';
import RegisterScreen from '../pages/auth/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ChatStack() {
  const [openSearch, setOpenSearch] = useState(false);
  const navigation = useNavigation();
  const phoneButton = () => {
    return <Icon name="call-outline" size={24} />;
  };
  const searchButton = () => {
    return (
      <TouchableOpacity onPress={() => setOpenSearch(true)}>
        <Icon name="search-outline" size={24} />
      </TouchableOpacity>
    );
  };

  const headerRight = () => {
    return (
      <View style={{width: '100%', paddingRight: 16}}>
        {!openSearch ? (
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

  const headerLeft = () => {
    return (
      <TouchableOpacity
        style={{paddingLeft: 16}}
        onPress={() => {
          if (openSearch) {
            setOpenSearch(false);
          } else {
            navigation.goBack();
          }
        }}>
        <Icon name="arrow-back-outline" size={24} />
      </TouchableOpacity>
    );
  };
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
      <Stack.Screen name="Chats" component={TabNav} />
      <Stack.Screen
        name="RoomChat"
        component={RoomChat}
        options={{
          title: openSearch ? '' : 'Gladys',
          headerRight: headerRight,
          headerLeft: headerLeft,
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
        options={{title: 'Chats'}}
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
