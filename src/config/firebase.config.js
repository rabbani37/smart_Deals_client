
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVb3Y9axwS2eLZRIxTb0mdCM2lRVCgV4w",
    authDomain: "smartdealsclient.firebaseapp.com",
    projectId: "smartdealsclient",
    storageBucket: "smartdealsclient.firebasestorage.app",
    messagingSenderId: "475478016238",
    appId: "1:475478016238:web:62966f193b4580a260f3ff"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
