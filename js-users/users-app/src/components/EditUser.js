import React from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'


const EditUser = () => {

  const {id} = useParams()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
    console.log(firstName)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
    console.log(lastName)
  }

  const editUser = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({
          first_name: firstName,
          last_name: lastName
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  }
  await fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, requestOptions)
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  }

  return (
    <div>
      <form>
        <label>First name:
          <input type={"text"} onChange={handleFirstNameChange}/>
        </label>
        <br></br>
        <label>Last name:
          <input type={"text"} onChange={handleLastNameChange}/>
        </label>
        <br></br>
        <button type="submit" onClick={editUser}>Edit User</button>
      </form>
    </div>
  )
}

export default EditUser