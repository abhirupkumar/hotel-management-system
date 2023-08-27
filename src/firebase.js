import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';

const clientCredentials = {
    apiKey: "AIzaSyD10EmGgOdOT1Gl_GUjDqqI58Qv2kGwmE0",
    authDomain: "hotel-management-system-b020d.firebaseapp.com",
    projectId: "hotel-management-system-b020d",
    storageBucket: "hotel-management-system-b020d.appspot.com",
    messagingSenderId: "670459660717",
    appId: "1:670459660717:web:da70af312f37e956e3b924"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export const auth = getAuth();

export default firebase;