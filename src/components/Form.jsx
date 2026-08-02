
import { useState } from "react"
import { uploadDataToFirestore, editExercise } from "../hooks/useDataBase.js"
import "../Form.css"

const Form = ({ isEditMode = false, editingExercise = null, onCancel, onSubmitSuccess }) => {
  const [submitMessageToggled, setSubmitMessageToggled] = useState(false)

  async function formEvent(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const formValues = Object.fromEntries(formData)

    try {
      if (isEditMode && editingExercise?.exerciseId) {
        await editExercise(editingExercise.exerciseId, formValues)
      } else {
        await uploadDataToFirestore(formValues)
      }

      console.log('Success:', formValues)

      setSubmitMessageToggled(true)
      setTimeout(() => {
        form.reset()
        setSubmitMessageToggled(false)
        onSubmitSuccess?.()
      }, 3000)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }

  return (
    <div>
      <form onSubmit={formEvent}>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" required defaultValue={editingExercise?.date ?? ""}></input>
        </div>
        <div className="form-group">
          <label>Exercise Name</label>
          <input type="text" name="name" placeholder="e.g. Dumbell curls, Bench Press, etc" required defaultValue={editingExercise?.name ?? ""}></input>
        </div>
        <div className="form-group">
          <label >Sets</label>
          <input type="number" name="sets" placeholder="e.g. 3" required defaultValue={editingExercise?.sets ?? ""}></input>
        </div>
        <div className="form-group">
          <label >Reps</label>
          <input type="number" name="reps" placeholder="e.g. 10" required defaultValue={editingExercise?.reps ?? ""}></input>
        </div>
        <div className="form-group">
          <label >Weight</label>
          <input type="number" name="weight" placeholder="e.g. 45" required defaultValue={editingExercise?.weight ?? ""}></input>
        </div>

        {!submitMessageToggled && (
          <div>
            <input type="submit" value={isEditMode ? "Save Changes" : "Submit"}></input>
            {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
          </div>
        )}

        {submitMessageToggled && <p className="submitted-text">Form Submitted</p>}
      </form>
    </div>
  )
}

export default Form