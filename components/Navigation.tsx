import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallsScreen from '../pages/CallsScreen';
import ChatsScreen from '../pages/ChatsScreen';
import FriendsScreen from '../pages/FriendsScreen';
import StatusScreen from '../pages/StatusScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import RoomChat from '../pages/RoomChat';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={TabNav} />
      <Stack.Screen name="Room Chat" component={RoomChat} />
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
