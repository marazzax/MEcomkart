import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: `${process.env.Firebase_Config_apiKey}`,
  authDomain: `${process.env.Firebase_Config_authDomain}`,
  projectId: `${process.env.Firebase_Config_projectId}`,
  storageBucket: `${process.env.Firebase_Config_storageBucket}`,
  messagingSenderId: `${process.env.Firebase_Config_messagingSenderId}`,
  appId: `${process.env.Firebase_Config_appId}`,
  // measurementId: `${process.env.Firebase_Config_measurementId}`,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
