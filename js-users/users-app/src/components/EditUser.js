import React from 'react'


const EditUser = () => {

  

  return (
    <div>
      <form>
        <label>First name:
          <input type={"text"}/>
        </label>
        <br></br>
        <label>Last name:
          <input type={"text"}/>
        </label>
        <br></br>
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default EditUser