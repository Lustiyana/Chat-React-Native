import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatContext from '../../context/Chat';
import {useNavigation} from '@react-navigation/native';

const HeaderLeft = () => {
  const {state, dispatch} = useContext(ChatContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{paddingLeft: 16}}
      onPress={() => {
        if (state.openSearch) {
          dispatch({type: 'SET_OPEN_SEARCH', payload: false});
        } else {
          navigation.goBack();
        }
      }}>
      <Icon name="arrow-back-outline" size={24} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
