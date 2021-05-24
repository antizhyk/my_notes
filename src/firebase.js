import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAnAa2xhNeh6sOURgnY1ASb6N9e_6R-rzg",
    authDomain: "my-note-1464a.firebaseapp.com",
    projectId: "my-note-1464a",
    storageBucket: "my-note-1464a.appspot.com",
    messagingSenderId: "464381377587",
    appId: "1:464381377587:web:5fa77ab54a5eea87bcb746",
    measurementId: "G-654MCMNEQE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase