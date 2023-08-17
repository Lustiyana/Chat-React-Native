// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVOg_7MoeRD29pQzws42VOMGXGKQZhw9k',
  authDomain: 'chat-c90bb.firebaseapp.com',
  databaseURL: 'https://chat-c90bb-default-rtdb.firebaseio.com',
  projectId: 'chat-c90bb',
  storageBucket: 'chat-c90bb.appspot.com',
  messagingSenderId: '643646052457',
  appId: '1:643646052457:web:e13f745266c48fc4fe2af8',
  measurementId: 'G-96P7P9N63J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
