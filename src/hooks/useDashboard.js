
import { useState, useEffect } from 'react';


function useGetWorkoutData( ) {
    const [workoutData, setWorkoutData] = useState(null);

    useEffect(() => {
        async function loadWorkouts() {
           const stored = localStorage.getItem('workoutData')

        if (stored){
                setWorkoutData(JSON.parse(stored))
        } else {

            const res = await fetch('/public/data.json')
            const data = await res.json()
                    setWorkoutData(data.workouts)
                    localStorage.setItem("workoutData", JSON.stringify(data.workouts))                    

        } 
        }
        loadWorkouts()

    }, [])

    return {workoutData}
}

