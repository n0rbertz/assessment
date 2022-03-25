import React from 'react'

const AddUser = () => {
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
 export default AddUser