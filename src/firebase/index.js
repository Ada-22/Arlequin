import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyAAH2r05_Dkc6OOOEI8wwOJLuisLPJEvLs",
    authDomain: "arlequin-df91c.firebaseapp.com",
    databaseURL: "https://arlequin-df91c.firebaseio.com",
    projectId: "arlequin-df91c",
    storageBucket: "arlequin-df91c.appspot.com",
    messagingSenderId: "152823626782",
    appId: "1:152823626782:web:6126bc24b715e001d5020f"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}