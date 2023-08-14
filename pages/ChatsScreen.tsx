import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';

type ChatsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Chats'>;
};
const ChatsScreen: React.FC<ChatsScreenProps> = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Room Chat')}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{width: 42, height: 42}}
          />
          <View>
            <Text style={styles.name}>Gladys</Text>
            <Text>Are you okay?</Text>
          </View>
        </View>
        <Text>19:03</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    gap: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default ChatsScreen;
