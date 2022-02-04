import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    
    apiKey: "AIzaSyCl8RrzKBtUf-AGBPXTmQDJ_8PGCUwtvhg",

    authDomain: "crwn-clothing-db-d2bef.firebaseapp.com",

    projectId: "crwn-clothing-db-d2bef",

    storageBucket: "crwn-clothing-db-d2bef.appspot.com",

    messagingSenderId: "7608992358",

    appId: "1:7608992358:web:77fe013511bcaa41b423a7",

    measurementId: "G-ZXD84JJNF6"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
