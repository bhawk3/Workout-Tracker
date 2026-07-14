
import useGetWorkoutData from './hooks/useDashboard'
import Form from './components/Form.jsx'
import './App.css'

function App() {
  const { workoutData } = useGetWorkoutData()
  let newWorkoutData = workoutData
  
console.log('workoutData from App.jsx:', newWorkoutData)
//Left off working on updating DOM from DB
//The DOM doesn't update on form submission
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
                <p>{date}</p>
              {Object.entries(exercises).map(([exerciseId]) => (
                <div key={exerciseId} id="dashboard">
                  <p>&nbsp; Name: {exercises.name}</p>
                  <p> &nbsp; Sets: {exercises.sets}</p>
                  <p> &nbsp; Reps: {exercises.reps}</p>
                  <p> &nbsp; Weight: {exercises.weight}</p>
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
