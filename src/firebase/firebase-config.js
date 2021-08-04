import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBBKWonF5oYgAqLMyDukqmXJVkmU4nZEHk",
    authDomain: "movies-app-react-ec936.firebaseapp.com",
    projectId: "movies-app-react-ec936",
    storageBucket: "movies-app-react-ec936.appspot.com",
    messagingSenderId: "756900856468",
    appId: "1:756900856468:web:c1ed906cff85010749aa81",
    measurementId: "G-HL0S5QYGMH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db, googleAuthProvider, firebase
}