
import { useState, useEffect } from 'react';

export default function useGetWorkoutData( ) {
    const [workoutData, setWorkoutData] = useState([]);

    useEffect(() => {
        async function loadWorkouts() {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                //changing this data.workouts will update the DOM state in App.jsx, which will re-render the dashboard with the new data
                setWorkoutData(data.workouts || []);
            } catch (error) {
                console.error('Error loading workouts:', error);
                setWorkoutData([]);
            }
        }
        loadWorkouts()

    }, [])

    return {workoutData}
}

