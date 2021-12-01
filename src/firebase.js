import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDgWmuKVluzIjLhpJM9iaWZLxI9PgWsOAU",

  authDomain: "tinderclone-367ad.firebaseapp.com",

  databaseURL: "https://tinderclone-367ad-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "tinderclone-367ad",

  storageBucket: "tinderclone-367ad.appspot.com",

  messagingSenderId: "507443526898",

  appId: "1:507443526898:web:ecc72a71324714f920246b",

  measurementId: "G-E1Z7E8E5WE",

};
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore()

  export default database