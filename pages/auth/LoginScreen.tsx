import React from 'react';
import {RootStackParamList} from '../../types/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <Text>Email</Text>
      <TextInput style={styles.formInput} />
      <Text>Password</Text>
      <TextInput style={styles.formInput} secureTextEntry={true} />
      <TouchableOpacity style={styles.buttonSubmit}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    backgroundColor: '#1C1C2D',
    padding: 16,
    borderRadius: 8,
  },
});

export default LoginScreen;
