
import useGetWorkoutData from './hooks/useDashboard'
import './App.css'

function App() {
  const { workoutData } = useGetWorkoutData()

//      console.log({workoutData})

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Workout Tracker</h1>

        </div>
      </section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {workoutData.map((workout) => (
            <>
              <tr key={`${workout.date}-header`} className="date-row">
                <td colSpan={5}>{workout.date}</td>
              </tr>
              {workout.exercises.map((exercise) => (
                <tr key={exercise.id}>
                  <td />
                  <td>{exercise.name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.weight}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default App
