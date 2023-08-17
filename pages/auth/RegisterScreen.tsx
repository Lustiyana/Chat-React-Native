import React, {useState} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {auth} from '../../firebase/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};
const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        setIsRegister(true);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
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
                value={email}
                onChangeText={e => setEmail(e)}
              />
              <TextInput placeholder="Username" style={styles.formInput} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 16,
                }}>
                <TextInput
                  placeholder="First Name"
                  style={[styles.formInput, styles.col]}
                />
                <TextInput
                  placeholder="Last Name"
                  style={[styles.formInput, styles.col]}
                />
              </View>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.formInput}
                value={password}
                onChangeText={e => setPassword(e)}
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={styles.formInput}
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
