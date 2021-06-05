import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAfOZUomqRAtsPe2o06Sd2kCEtYB4WAfM8",
    authDomain: "slack-clone-866d2.firebaseapp.com",
    projectId: "slack-clone-866d2",
    storageBucket: "slack-clone-866d2.appspot.com",
    messagingSenderId: "351093833548",
    appId: "1:351093833548:web:dae9a22df31b50517819e9"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider, db}
