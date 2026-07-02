
import { useState, useEffect } from 'react';

export default function useGetWorkoutData( ) {
    const [workoutData, setWorkoutData] = useState([]);

    useEffect(() => {
        async function loadWorkouts() {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
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

