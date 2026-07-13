
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
          {Object.entries(newWorkoutData).map(([date, exercises]) => (
            <div id="dashboard-card" key={date}>
                <p >{date}</p>
             
              {Object.entries(exercises).map(([exerciseId, exercise]) => (
                <div key={exerciseId} id="dashboard">
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
