import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const addNewUser = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        status: "active"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    await fetch('https://assessment-users-backend.herokuapp.com/users', requestOptions)
    .then(response => response.ok ? navigate('/') : response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className="container">
      <form>
        <label>First name:
          <input type={"text"} onChange={handleFirstNameChange}/>
        </label>
        <br></br>
        <label>Last name:
          <input type={"text"} onChange={handleLastNameChange}/>
        </label>
        <br></br>
        <button className="btn" type="submit" onClick={addNewUser}>Add User</button>
      </form>
    </div>
  )
}
 export default AddUser