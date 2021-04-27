import firebase from 'firebase';

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDDVOhb2LIwdt2G8LKZH8yjdNMq0OnzoW4",
  authDomain: "diffrent-ad619.firebaseapp.com",
  projectId: "diffrent-ad619",
  storageBucket: "diffrent-ad619.appspot.com",
  messagingSenderId: "561339803718",
  appId: "1:561339803718:web:1edf54e583434612f9c247"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;