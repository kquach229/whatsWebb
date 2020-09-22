import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCakayJKyuNWfiVoUQvaet1V8Y8DX2j-jM",
  authDomain: "whatswebb-c6c7e.firebaseapp.com",
  databaseURL: "https://whatswebb-c6c7e.firebaseio.com",
  projectId: "whatswebb-c6c7e",
  storageBucket: "whatswebb-c6c7e.appspot.com",
  messagingSenderId: "830428925272",
  appId: "1:830428925272:web:b8b5d89a6afbb53496692d",
  measurementId: "G-PSFNWGBCYZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
