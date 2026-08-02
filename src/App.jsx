
import useGetWorkoutData from './hooks/useDashboard'
import Form from './components/Form.jsx'
import { deleteExercise } from "./hooks/useDataBase.js"
import { useState } from "react"
import './App.css'

function App() {
  const { workoutData } = useGetWorkoutData()
  const newWorkoutData = workoutData ?? {}

  const [showForm, setShowForm] = useState(false)
  const [editingExercise, setEditingExercise] = useState(null)

  const openAddForm = () => {
    setEditingExercise(null)
    setShowForm(true)
  }

  const openEditForm = (exerciseId, exercises) => {
    setEditingExercise({ exerciseId, ...exercises })
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingExercise(null)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Workout Tracker</h1>
          <button onClick={openAddForm}>Add Workout</button>
          {showForm && (
            <Form
              key={editingExercise?.exerciseId ?? "new"}
              isEditMode={Boolean(editingExercise)}
              editingExercise={editingExercise}
              onCancel={closeForm}
              onSubmitSuccess={closeForm}
            />
          )}
        </div>
      </section>
      <div id="dashboard-container" >
        {Object.entries(newWorkoutData).map(([exerciseId, exercises]) => (
          <div id="dashboard-card" key={exerciseId}>
            <p>{exerciseId}</p>
            <div key={exerciseId} id="dashboard">
              <p>&nbsp; Date: {exercises.date}</p>
              <p>&nbsp; Name: {exercises.name}</p>
              <p> &nbsp; Sets: {exercises.sets}</p>
              <p> &nbsp; Reps: {exercises.reps}</p>
              <p> &nbsp; Weight: {exercises.weight}</p>
              <button onClick={() => openEditForm(exerciseId, exercises)}>Edit</button>
              <button onClick={() => deleteExercise(exerciseId)}>Delete</button>
            </div>
            <button onClick={openAddForm}>Add Exercise</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
