
import { useState } from "react"
import { uploadDataToFirestore } from "../hooks/useDataBase.js"
import "../Form.css"




//The form data is not functioning because I am not saving to localStorage anymore
//It is still logging though, which is good.
  
/*function saveNewWorkout(workout) {
  const saved = localStorage.getItem("New Workout")
  const workouts = saved ? JSON.parse(saved) : []
  workouts.push(workout)
  console.log(workouts)
  localStorage.setItem("New Workout", JSON.stringify(workouts))
}*/

const Form = () => {

const [submitMessageToggled, setSubmitMessageToggled] = useState(false)

    async function formEvent(e) {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const formValues = Object.fromEntries(formData)
        //console.log(formValues)
        try {

            let result = await uploadDataToFirestore(formValues)
            /*const fetchedData = await fetch('/data.json', {
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
*/
             /*
             On Page Load: Fetch the JSON exercises and get the Local Storage exercises. 
             Combine them into one master array, then render them to the DOM.
            
             On Form Submit: Save only the new custom exercise to Local Storage (inside an array). 
             Do not touch the original JSON file.
             
             Refresh: Re-render the combined list.
             
             */
              
            //saveNewWorkout(formValues) 
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