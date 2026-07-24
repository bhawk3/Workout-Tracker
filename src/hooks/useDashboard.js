
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./useDataBase"


export default function useGetWorkoutData( ) {
    const [workoutData, setWorkoutData] = useState([]);

    useEffect(() => {
        async function loadWorkouts() {
           const docRef = doc(db, 'Workouts', 'eUqAK4cACxsatLZ4wtN0')

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (!snapshot.exists()) {
        setWorkoutData([])
        return
      }

      const data = snapshot.data()
      setWorkoutData(data.Exercises || [])
    }, (error) => {
      console.error('Firestore snapshot error', error)
      setWorkoutData([])
    })

    return () => unsubscribe()
        }
        loadWorkouts()

    }, [])

    return {workoutData}
}

