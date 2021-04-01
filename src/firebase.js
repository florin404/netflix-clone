import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsO8dlM_0QbFH5xjTS5WdpI3cWMaFYD9c",
  authDomain: "netflix-build-1ac87.firebaseapp.com",
  projectId: "netflix-build-1ac87",
  storageBucket: "netflix-build-1ac87.appspot.com",
  messagingSenderId: "994561885016",
  appId: "1:994561885016:web:74f62312b0ad7297a81b2d",
  measurementId: "G-1L9LZXNSKE"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth } 
export default db;