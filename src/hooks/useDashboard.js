
import { useState, useEffect } from 'react';


export default function useGetWorkoutData( ) {
    const [workoutData, setWorkoutData] = useState([]);

    useEffect(() => {
        async function loadWorkouts() {
           const stored = localStorage.getItem('workoutData')

        if (stored){
                setWorkoutData(JSON.parse(stored))
        } else {

            const res = await fetch('/data.json')
             if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
            const data = await res.json()
                    setWorkoutData(data.workouts)
                    localStorage.setItem("workoutData", JSON.stringify(data.workouts))                    

        } 
        }
        loadWorkouts()

    }, [])

    return {workoutData}
}

