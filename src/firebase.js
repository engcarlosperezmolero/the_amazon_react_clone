import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyArIOTAQT97GXGmCiPPKNTU5HAj4Z2lMJg",
  authDomain: "the-ammazon-clone.firebaseapp.com",
  databaseURL: "https://the-ammazon-clone.firebaseio.com",
  projectId: "the-ammazon-clone",
  storageBucket: "the-ammazon-clone.appspot.com",
  messagingSenderId: "835299424593",
  appId: "1:835299424593:web:79eecb5c4030ef1ab9bb70",
  measurementId: "G-GFPZTL4976"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };