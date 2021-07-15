import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDrC3r8EUq5nDcEbJDgkthV7s8kCSmLGzs",
  authDomain: "yutbe-clone.firebaseapp.com",
  projectId: "yutbe-clone",
  storageBucket: "yutbe-clone.appspot.com",
  messagingSenderId: "436891906595",
  appId: "1:436891906595:web:0a821b6e9382ceb26b3796"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
