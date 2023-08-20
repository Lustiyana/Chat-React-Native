import React, {useRef, useState} from 'react';
import {RootStackParamList} from '../../types/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import {styles} from './style';
import {auth} from '../../firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set, getDatabase} from 'firebase/database';

type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};
const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [modifiedData, setModifiedData] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });
  const handleRegister = () => {
    if (modifiedData.password === modifiedData.confirmPassword) {
      createUserWithEmailAndPassword(
        auth,
        modifiedData.email,
        modifiedData.password,
      )
        .then(res => {
          setIsRegister(true);
          const db = getDatabase();
          set(ref(db, 'users/' + res.user.uid), {
            email: modifiedData.email,
            username: modifiedData.username,
            firstName: modifiedData.firstName,
            lastName: modifiedData.lastName,
            password: modifiedData.password,
            uid: res.user.uid,
          });
          navigation.navigate('Login');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      Alert.alert('PASSWORD HARUS SAMA WOI');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.imageBackground}>
          <View style={styles.formContainer}>
            <View style={styles.formContent}>
              <Text style={styles.formTitle}>REGISTER</Text>
              <TextInput
                placeholder="Email"
                style={styles.formInput}
                onChangeText={e =>
                  setModifiedData(prev => ({...prev, email: e}))
                }
              />
              <TextInput
                placeholder="Username"
                style={styles.formInput}
                onChangeText={e =>
                  setModifiedData(prev => ({...prev, username: e}))
                }
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 16,
                }}>
                <TextInput
                  placeholder="First Name"
                  style={[styles.formInput, styles.col]}
                  onChangeText={e =>
                    setModifiedData(prev => ({...prev, firstName: e}))
                  }
                />
                <TextInput
                  placeholder="Last Name"
                  style={[styles.formInput, styles.col]}
                  onChangeText={e =>
                    setModifiedData(prev => ({...prev, lastName: e}))
                  }
                />
              </View>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.formInput}
                onChangeText={e =>
                  setModifiedData(prev => ({...prev, password: e}))
                }
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={styles.formInput}
                onChangeText={e =>
                  setModifiedData(prev => ({...prev, confirmPassword: e}))
                }
              />
              <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={handleRegister}>
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
              <View style={styles.formText}>
                <Text>Have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.formLink}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
