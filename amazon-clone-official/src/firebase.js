import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDM_d-5zt5loRnN2SlV8L5R0cyFEXO1Uzw",
    authDomain: "clone1-5917d.firebaseapp.com",
    projectId: "clone1-5917d",
    storageBucket: "clone1-5917d.appspot.com",
    messagingSenderId: "410191828604",
    appId: "1:410191828604:web:c70a18f4e7f57338801bf9",
    measurementId: "G-DLDZ0XG42X"
});

const db = firebase.firestore();

export { db };