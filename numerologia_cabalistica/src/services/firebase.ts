import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBkKSMOezNgemSUlsHOGJlfS3VNDnfUMA",
  authDomain: "numerisvalidacao-86484.firebaseapp.com",
  databaseURL: "https://numerisvalidacao-86484-default-rtdb.firebaseio.com",
  projectId: "numerisvalidacao-86484",
  storageBucket: "numerisvalidacao-86484.firebasestorage.app",
  messagingSenderId: "815695098836",
  appId: "1:815695098836:web:4ce520b4daaf05363bdc41",
  measurementId: "G-JEBWRFLFX2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app); 
