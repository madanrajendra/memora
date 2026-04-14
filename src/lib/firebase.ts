import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace with your actual Firebase project config from
// https://console.firebase.google.com → Project Settings → Your Apps
const firebaseConfig = {
  apiKey: "AIzaSyCRG-KEKrdhYmpFGKZtfm8hWN1GMlugmaI",
  authDomain: "playnexa-79466.firebaseapp.com",
  projectId: "playnexa-79466",
  storageBucket: "playnexa-79466.firebasestorage.app",
  messagingSenderId: "659368644388",
  appId: "1:659368644388:web:c526e0c4849af49b2a6db1",
  measurementId: "G-HQ6BHJDWPM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
