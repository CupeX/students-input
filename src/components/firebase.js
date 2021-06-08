import firebase from 'firebase';
require('firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyAmiHfPoCndQtpGB3sdhvNAnzER_NYqRq0',
  authDomain: 'students-input.firebaseapp.com',
  databaseURL:
    'https://students-input-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'students-input',
  storageBucket: 'students-input.appspot.com',
  messagingSenderId: '1037427824217',
  appId: '1:1037427824217:web:edad276ef09ea0b4688348',
  measurementId: 'G-459YJZBEBM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

// export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
