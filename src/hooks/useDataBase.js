
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UseDataBase = async () => {
     const docRef = doc(db, "Workouts", "eUqAK4cACxsatLZ4wtN0")
            const docSnap = await getDoc(docRef)

    if (!docSnap.exists()){
        console.warn('Workout document does not exist');
        return [];
    }
    const data = docSnap.data()
    if (!data || !data.Exercises) {
        console.warn("No Exercises found in document");
    return [];
    }

    return data.Exercises;

          

}

export {UseDataBase}
