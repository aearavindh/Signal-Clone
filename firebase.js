import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkqsLKjVoX3s7jDFj10fSMlB5YrfCLVo0",
    authDomain: "signal-clone-54386.firebaseapp.com",
    projectId: "signal-clone-54386",
    storageBucket: "signal-clone-54386.appspot.com",
    messagingSenderId: "668729326600",
    appId: "1:668729326600:web:91a814aabbc32c374565bd"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };