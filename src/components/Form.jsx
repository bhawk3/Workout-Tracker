
import { useState } from "React"
import "../Form.css"


//I need to save the form data to local storage 
// then update the DOM state with the local storage data

const Form = () => {

const [submitMessageToggled, setSubmitMessageToggled] = useState(false)

    async function formEvent(e) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const formValues = Object.fromEntries(formData)
        //console.log(formValues)
        try {
            const fetchedData = await fetch('/data.json', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
            if (!fetchedData.ok) {
                throw new Error(`HTTP error! Status: ${fetchedData.status}`);
            }
             const result = await fetchedData.json();
            localStorage.setItem("New Workout", JSON.stringify(formValues))

            console.log('Success:', result);

            

            //Reset form 3 seconds after submission
            setSubmitMessageToggled(true)
            setTimeout(() => {

            form.reset()
            setSubmitMessageToggled(false)
                        }, 3000)

        } 

        catch (error) {
              console.error('Error posting data:', error);

    }
     }
  return (
    <div>
        <form onSubmit={formEvent}   >
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