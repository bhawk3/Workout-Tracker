
import { useState } from "React"
import "../Form.css"


const Form = () => {

const [submitMessageToggled, setSubmitMessageToggled] = useState(false)

    function formEvent(e) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const formValues = Object.fromEntries(formData)
        console.log(formValues)
    }

  return (
    <div>
        <form onSubmit={formEvent}  >
            <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" required></input>
            </div>
            <div className="form-group">
                <label>Exercise Name</label>
                <input type="text" name="name" placeholder="e.g. Dumbell curls, Bench Press, etc" required></input>
            </div>
            <div className="form-group">
                <label >Sets</label>
                <input type="number" name="sets" placeholder="e.g. 3" required></input>
            </div>
            <div className="form-group">
                <label >Reps</label>
                <input type="number" name="reps" placeholder="e.g. 10" required></input>
            </div>
            <div className="form-group">
                <label >Weight</label>
                <input type="number" name="weight" placeholder="e.g. 45" required></input>
            </div>

{!submitMessageToggled && <input type="submit"></input>}

{ submitMessageToggled && <p className="submitted-text">Form Submitted</p>}
        </form>

    </div> ) 
}

export default Form