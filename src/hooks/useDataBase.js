
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, deleteField } from "firebase/firestore";

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

//You have to use Object.keys to get the length of the Exercises object
    //Bc you cant use .length on an object 
    const nextIndex = Object.keys(await UseDataBase()).length + 1;

const uploadDataToFirestore = async (newExercise) => {
    const docRef = doc(db, "Workouts", "eUqAK4cACxsatLZ4wtN0")
    

    let result = await updateDoc(docRef, {
        [`Exercises.${nextIndex}.date`]: newExercise.date,
        [`Exercises.${nextIndex}.name`]: newExercise.name,
        [`Exercises.${nextIndex}.sets`]: parseInt(newExercise.sets),
        [`Exercises.${nextIndex}.reps`]: parseInt(newExercise.reps),
        [`Exercises.${nextIndex}.weight`]: parseInt(newExercise.weight)

    })
    return newExercise
}

     //Delete functionality
     //im gonna use exerciseId but I dont think itll work since im not importing app.jsx but maybe

     /*On initial render this is running. Its not running when clicking the delete btn and its 
     removing the last input and not the selected one */
     async function deleteExercise(exerciseId) {
        const docRef = doc(db, "Workouts", "eUqAK4cACxsatLZ4wtN0")
        await updateDoc(docRef, {
            [`Exercises.${exerciseId}`]: deleteField()
        })
        
    }

export {UseDataBase, uploadDataToFirestore, deleteExercise};
