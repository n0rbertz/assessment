import React from 'react'
import Header from './Header'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

  const navigate = useNavigate()
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

  const addNewUser = async (event) => {
    event.preventDefault();
    setFirstNameErrorMessage("")
    setLastNameErrorMessage("")
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
    .then((response) => response.ok ? null : response.json())
    .then((error) => {
      if (error) {
        handleErrorMessages(error)
      }
      else {
        alert("Succesfully added!")
        navigate('/users')
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
    <>
    <Header/>
    <div className="container">
      <form>
        <label>First name:
          <input type={"text"} onChange={handleFirstNameChange}/>
        </label>
        <p style={{ color: "red" }}>{firstNameErrorMessage}</p>
        <br></br>
        <label>Last name:
          <input type={"text"} onChange={handleLastNameChange}/>
        </label>
        <p style={{color: "red"}}>{lastNameErrorMessage}</p>
        <br></br>
        <button className="btn" type="submit" onClick={addNewUser}>Add User</button>
      </form>
    </div>
    </>
  )
}
 export default AddUser