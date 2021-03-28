import firebase from 'firebase'

require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCc1zVaG0BsDfXuwaxBmUt7folE6Kjyc2I",
    authDomain: "wily-app-e78a3.firebaseapp.com",
    databaseURL: "https://wily-app-e78a3-default-rtdb.firebaseio.com",
    projectId: "wily-app-e78a3",
    storageBucket: "wily-app-e78a3.appspot.com",
    messagingSenderId: "15589943062",
    appId: "1:15589943062:web:f3468a893023002cd55237"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();