import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDLgD__tGJTwnG8XMr_22x8xYILpc2j1l0",
    authDomain: "arlequin-my-app.firebaseapp.com",
    databaseURL: "https://arlequin-my-app.firebaseio.com",
    projectId: "arlequin-my-app",
    storageBucket: "arlequin-my-app.appspot.com",
    messagingSenderId: "933168345307",
    appId: "1:933168345307:web:d0cce8ae39e4c6f4fd9cfe"});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}