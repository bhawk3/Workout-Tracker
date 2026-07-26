
import useGetWorkoutData from './hooks/useDashboard'
import Form from './components/Form.jsx'
import { deleteExercise } from "./hooks/useDataBase.js"
import { useState } from "react"
import './App.css'

function App() {
  const { workoutData } = useGetWorkoutData()
  let newWorkoutData = workoutData
  
console.log('workoutData from App.jsx:', newWorkoutData)

const [showForm, setShowForm] = useState(false)



  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Workout Tracker</h1>
         <button onClick={() => setShowForm(true)}>Add Workout</button>
{showForm && <Form />}
        </div>
      </section>
      <div id="dashboard-container" >
          {Object.entries(newWorkoutData).map(([exerciseId, exercises]) => (
            <div id="dashboard-card" key={exerciseId}>
                <p>{exerciseId}</p>
                <div key={exerciseId} id="dashboard">
                  <p>&nbsp; Name: {exercises.name}</p>
                  <p> &nbsp; Sets: {exercises.sets}</p>
                  <p> &nbsp; Reps: {exercises.reps}</p>
                  <p> &nbsp; Weight: {exercises.weight}</p>
                  <button>Edit</button>
                  <button onClick={() => deleteExercise(exerciseId)}>Delete</button>
                </div>
              <button>Add Exercise</button>
            </div>
          ))}
      </div>

    </>
  )
}

export default App
