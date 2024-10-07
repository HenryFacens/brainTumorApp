import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5DLML7Qspl5nt-YIcqbixTyc8gWBF7AI",
    authDomain: "braintumor-d8157.firebaseapp.com",
    projectId: "braintumor-d8157",
    storageBucket: "braintumor-d8157.appspot.com",
    messagingSenderId: "901967792227",
    appId: "1:901967792227:web:ff9eefde2e31ad701f9056",
    measurementId: "G-T15F4038ZG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };