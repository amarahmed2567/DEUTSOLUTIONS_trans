// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6KjyvXhAogZqL7XK9cIbCVAzpNlfcde4",
  authDomain: "deutsolutions-bc9a0.firebaseapp.com",
  projectId: "deutsolutions-bc9a0",
  storageBucket: "deutsolutions-bc9a0.appspot.com",
  messagingSenderId: "979815264049",
  appId: "1:979815264049:web:5ce75067fa5f39cee20a10",
  measurementId: "G-BGQG6W15BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add subscription to Firestore
export const addSubscription = async (email) => {
  try {
    const docRef = await addDoc(collection(db, "subscriptions"), {
      email: email,
      timestamp: serverTimestamp(),
      status: "active"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding subscription: ", error);
    return { success: false, error: error.message };
  }
};

export { db };
