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
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default EditUser