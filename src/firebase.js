


import firebase from "firebase"
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDd7Rah_S9ifEvFUr6ejRVis3v-7JPp1Lg",
    authDomain: "todo-list-app-ss.firebaseapp.com",
    projectId: "todo-list-app-ss",
    storageBucket: "todo-list-app-ss.appspot.com",
    messagingSenderId: "1002110497814",
    appId: "1:1002110497814:web:2f3bf529528b5c77e8b137",
    measurementId: "G-9FWH4ZJLXB"
})

const db = firebase.firestore();
export default db