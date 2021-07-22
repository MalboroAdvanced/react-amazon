import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4Tx5otXNEu5EOJGwILKSW9NcC2lTaSQ4",
  authDomain: "netflix-clone-brij-2fd86.firebaseapp.com",
  projectId: "netflix-clone-brij-2fd86",
  storageBucket: "netflix-clone-brij-2fd86.appspot.com",
  messagingSenderId: "34237318315",
  appId: "1:34237318315:web:86c42fd1249031b19f63ee"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };