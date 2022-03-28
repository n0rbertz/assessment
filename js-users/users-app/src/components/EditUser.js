import React from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'


const EditUser = () => {

  const {id} = useParams()
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("")
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const editUser = async (event) => {
    event.preventDefault()
    setFirstNameErrorMessage("")
    setLastNameErrorMessage("")
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
    .then((response) => response.ok ? null : response.json())
    .then((error) => {
      if (error) {
        handleErrorMessages(error)
      }
    })
    .catch((error) => console.log(error))
  }

  const handleErrorMessages = (message) => {
      if (message.hasOwnProperty("first_name")) {
        setFirstNameErrorMessage(`First name ${message["first_name"]}`)
      }
      if (message.hasOwnProperty("last_name")) {
        setLastNameErrorMessage(`Last name ${message["last_name"]}`)
      }
  }

  return (
    <div>
      <form>
        <label>First name:
          <input type={"text"} onChange={handleFirstNameChange}/>
        </label>
        {firstNameErrorMessage}
        <br></br>
        <label>Last name:
          <input type={"text"} onChange={handleLastNameChange}/>
        </label>
        {lastNameErrorMessage}
        <br></br>
        <button type="submit" onClick={editUser}>Edit User</button>
      </form>
    </div>
  )
}

export default EditUser