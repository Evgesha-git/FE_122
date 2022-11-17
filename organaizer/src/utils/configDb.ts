import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC1ABkKRvQE72WlGVAlfgN1oRM5SOCFi8o",
    authDomain: "arganaizer-b80a6.firebaseapp.com",
    projectId: "arganaizer-b80a6",
    storageBucket: "arganaizer-b80a6.appspot.com",
    messagingSenderId: "353995673622",
    appId: "1:353995673622:web:2f028d31ee9443b2852537",
    measurementId: "G-N8F38VNNQN",
    databaseURL: 'https://arganaizer-b80a6-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databese = getDatabase(app);