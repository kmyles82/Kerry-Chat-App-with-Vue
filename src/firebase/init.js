import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXEpVAEadEVKl5MQSyOSzV1z2eIlgRaYE",
  authDomain: "kerry-chat.firebaseapp.com",
  databaseURL: "https://kerry-chat.firebaseio.com",
  projectId: "kerry-chat",
  storageBucket: "kerry-chat.appspot.com",
  messagingSenderId: "773891710961"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore()
