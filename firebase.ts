import {getApp,getApps, initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD49zGJ8RJhmcbBxugdYIYYgpX1GWuwNQ",
    authDomain: "saas-translator-app-viplav.firebaseapp.com",
    projectId: "saas-translator-app-viplav",
    storageBucket: "saas-translator-app-viplav.appspot.com",
    messagingSenderId: "448265399976",
    appId: "1:448265399976:web:dc08b25a674ae9ecd8dc9d",
    measurementId: "G-7WDZBTL40T"
  };

  const app = getApps().length ? getApp(): initializeApp(firebaseConfig)
  const auth =getAuth(app)
  const db=getFirestore(app)
  const functions =getFunctions(app)

export {db,auth,functions} ;