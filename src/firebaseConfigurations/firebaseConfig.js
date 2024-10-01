// firebaseConfig.js
import { firebase } from "@react-native-firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKkKW9qyNuJHRR_DGlptTDqI82Mbn6obk",
  authDomain: "demoapp-ae0db.firebaseapp.com",
  projectId: "demoapp-ae0db",
  storageBucket: "demoapp-ae0db.appspot.com",
  messagingSenderId: "513578889646",
  appId: "1:513578889646:android:5d7bfcc210c63137e2583f",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app(); // if already initialized, use that one
}

export default firebase;
