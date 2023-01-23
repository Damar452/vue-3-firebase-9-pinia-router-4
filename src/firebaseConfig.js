
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCgzh9pp-9WVuHyWMqXEnrdu2XQ6223Teo",
  authDomain: "vue-3-2022-f4a52.firebaseapp.com",
  projectId: "vue-3-2022-f4a52",
  storageBucket: "vue-3-2022-f4a52.appspot.com",
  messagingSenderId: "600472044360",
  appId: "1:600472044360:web:67d405f8c59bb995d2697d"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const auth = getAuth();
 const db = getFirestore();

 export { auth, db };