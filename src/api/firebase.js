import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDXiMVcHgysmy--66IgQA-OhgqyVlfY_SM",
    authDomain: "notereact-bd889.firebaseapp.com",
    databaseURL: "https://notereact-bd889.firebaseio.com",
    projectId: "notereact-bd889",
    storageBucket: "notereact-bd889.appspot.com",
    messagingSenderId: "342042657832"
  };

  firebase.initializeApp(config);
  const firebaseData = firebase.database().ref('notesdata');
export default firebaseData;
