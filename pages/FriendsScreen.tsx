import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {ref, get, getDatabase, child} from 'firebase/database';
import {Friend} from '../interface/Friend';
import AuthContext from '../context/Auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FriendsScreen = () => {
  const [users, setUsers] = useState<Friend[]>([]);
  const {authState, authDispatch} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
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
        const filterData = dataUsers.filter(item => item.uid !== authState.uid);
        setUsers(filterData);
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
        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <View style={styles.centeredView}>
            <Pressable
              style={styles.presableClose}
              onPressOut={() => setModalVisible(!modalVisible)}></Pressable>
            <View style={styles.modalView}>
              <TouchableOpacity>
                <Text style={styles.modalText}>Chat with {item.username}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.modalText}>Call on ChaTi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Pressable
          style={styles.container}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.content}>
            <Image
              source={require('../assets/images/profile.png')}
              style={{width: 42, height: 42}}
            />
            <View>
              <Text style={styles.name}>{item.username}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList renderItem={renderFriends} data={users} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  presableClose: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
    width: '75%',
    gap: 12,
    zIndex: 1000,
  },
  modalText: {
    fontSize: 20,
  },
});

export default FriendsScreen;
