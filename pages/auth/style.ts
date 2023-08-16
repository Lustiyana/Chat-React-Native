import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
  },
  imageBackground: {
    height: '100%',
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    margin: 'auto',
  },
  subTitle: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '600',
  },
  formContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  formContent: {
    backgroundColor: 'white',
    paddingVertical: 42,
    marginTop: 50,
    borderTopStartRadius: 56,
    borderTopEndRadius: 56,
    paddingHorizontal: 32,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#1C1C2D',
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 999,
    borderColor: '#CFCFCF',
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  col: {
    flex: 1,
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
    borderRadius: 999,
    marginBottom: 16,
  },
  formText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLink: {
    color: 'blue',
    fontWeight: '600',
  },
});
