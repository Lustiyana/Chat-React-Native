import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatContext from '../context/Chat';

interface Chat {
  name: string;
  message: string;
  receiver: boolean;
}

const renderItem = ({item}: {item: Chat}) => {
  return (
    <View style={styles.chatContainer}>
      <Text
        style={[
          styles.chatSent,
          {alignSelf: item.receiver ? 'flex-start' : 'flex-end'},
        ]}>
        {item.message}
      </Text>
    </View>
  );
};

const RoomChat = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState<Chat[]>([]);
  const Message = [
    {
      receiver: true,
      name: 'Gladys',
      message: 'Hallo',
    },
    {
      receiver: true,
      name: 'Gladys',
      message: 'Hallo',
    },
    {
      receiver: true,
      name: 'Gladys',
      message: 'Hallo',
    },
    {
      receiver: true,
      name: 'Gladys',
      message: 'Hallo',
    },
    {
      receiver: true,
      name: 'Gladys',
      message: 'Hallo',
    },
  ];

  function handleSend() {
    setChats(prev => {
      return [...prev, ...Message, {name: 'Arthur', message, receiver: false}];
    });
    setMessage('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item, key) => key}
        contentContainerStyle={{paddingBottom: 72}}
      />

      <View style={styles.chatInput}>
        <Icon name="camera-outline" size={32} />
        <TextInput
          style={styles.textInput}
          onChangeText={e => setMessage(e)}
          value={message}
        />
        {message && (
          <TouchableWithoutFeedback onPress={handleSend}>
            <Icon name="send-outline" size={32} />
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatInput: {
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    gap: 8,
    alignItems: 'center',
    zIndex: 2,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    borderRadius: 999,
    paddingHorizontal: 16,
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginVertical: 5,
  },
  chatSent: {
    backgroundColor: '#4685FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    color: 'white',
    maxWidth: '75%',
  },
});

export default RoomChat;
