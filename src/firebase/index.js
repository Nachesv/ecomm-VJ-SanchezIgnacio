import firebase from 'firebase/app';
import "@firebase/firestore"; 

const app = firebase.initializeApp({
    apiKey: "AIzaSyBLtoeTPGazQ0wUpEdg5ZpOL59U9NT3tt8",
    authDomain: "ecomm-hgs.firebaseapp.com",
    projectId: "ecomm-hgs",
    storageBucket: "ecomm-hgs.appspot.com",
    messagingSenderId: "279253515583",
    appId: "1:279253515583:web:f5e1d4f99fe400d842a78a"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app)
}