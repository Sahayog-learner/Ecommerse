import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
  apiKey: "AIzaSyAoA0lJPcbYJfLeYflXutr1q3IqcAvv6TM",
  authDomain: "ecommerce-db-7136f.firebaseapp.com",
  projectId: "ecommerce-db-7136f",
  storageBucket: "ecommerce-db-7136f.appspot.com",
  messagingSenderId: "846256566553",
  appId: "1:846256566553:web:27feb0524afc7822189588",
  measurementId: "G-YLX978WDKX"
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase; 

