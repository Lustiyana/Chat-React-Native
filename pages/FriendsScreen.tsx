import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {ref, get, getDatabase, child} from 'firebase/database';
import {Friend} from '../interface/Friend';

const FriendsScreen = () => {
  const [users, setUsers] = useState<Friend[]>([]);
  const getUsers = () => {
    const db = ref(getDatabase());
    get(child(db, 'users')).then(res => {
      if (res.exists()) {
        const data = res.val();
        const dataUsers = [];
        for (const key in data) {
          dataUsers.push({...data[key]});
        }
        setUsers(dataUsers);
      } else {
        console.log('No data available');
      }
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  const renderFriends = ({item}: {item: Friend}) => {
    return (
      <View>
        <Text>{item.username}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList renderItem={renderFriends} data={users} />
    </SafeAreaView>
  );
};

export default FriendsScreen;
