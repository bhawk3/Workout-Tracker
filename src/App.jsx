
import useGetWorkoutData from './hooks/useDashboard'
import Form from './components/Form.jsx'
import './App.css'

function App() {
  const { workoutData } = useGetWorkoutData()
  let newWorkoutData = workoutData
  
console.log('workoutData from App.jsx:', typeof newWorkoutData)
//Left off working on updating DOM from DB

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Workout Tracker</h1>
<Form />
        </div>
      </section>
      <div id="dashboard-container" >
          {Object.entries(newWorkoutData).map((workout) => (
            <div id="dashboard-card" key={workout.date}>
                <p >{workout.date}</p>
             
              {workout.exercises.map((exercise) => (
                <div key={exercise.id} id="dashboard">
                  <p>{exercise.name}</p>
                  <p> &nbsp; Sets: {exercise.sets}</p>
                  <p> &nbsp; Reps: {exercise.reps}</p>
                  <p> &nbsp; Weight: {exercise.weight}</p>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              ))}
              <button>Add Exercise</button>
            </div>
          ))}
      </div>

    </>
  )
}

export default App
