import React from 'react';
import {RootStackParamList} from '../../types/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.imageBackground}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subTitle}>Please login for access App</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formContent}>
            <Text style={styles.formTitle}>LOGIN</Text>
            <View style={styles.formInput}>
              <Icon name="mail-outline" size={24} />
              <TextInput placeholder="Email" />
            </View>
            <View style={styles.formInput}>
              <Icon name="lock-closed-outline" size={24} />
              <TextInput placeholder="Password" secureTextEntry={true} />
            </View>
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={() => navigation.navigate('Chats')}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.formText}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.formLink}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
