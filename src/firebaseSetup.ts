import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcfVFhj4CB4YU-92F9xAx4I3wVRggm3PA",
  authDomain: "cryptoangle-auth-firebase.firebaseapp.com",
  projectId: "cryptoangle-auth-firebase",
  storageBucket: "cryptoangle-auth-firebase.appspot.com",
  messagingSenderId: "908289181003",
  appId: "1:908289181003:web:4c3ddff84a9924bde6d4ce"
}; //this is where your firebase app values you copied will go


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export default auth;