import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmNBoBgxmnT4iifAeeswL640RQQDP5hZU",
  authDomain: "challenge-41315.firebaseapp.com",
  projectId: "challenge-41315",
  storageBucket: "challenge-41315.appspot.com",
  messagingSenderId: "678651954132",
  appId: "1:678651954132:web:3fcf5f1d726cf841a80c41",
  measurementId: "G-LHM9EGVZPM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
