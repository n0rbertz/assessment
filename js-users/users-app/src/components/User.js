import {Link} from 'react-router-dom'

const User = ({id, firstName, lastName, createdAt, status, updateMethod, editMethod}) => {
    return (
        <div className="container">
            {status === 'locked' ? <h3><s>{firstName} {lastName}</s></h3> : <h3>{firstName} {lastName}</h3>}
            <p style={{marginBottom:"20px"}}>{createdAt}</p>
            <button className="btn" onClick={() => updateMethod(id, status === "active" ? "locked" : "active")}>Change status</button>
            <Link to={`/edit/${id}`}><button className="btn-edit">Edit user</button></Link>
        </div>
    )
}

export default User