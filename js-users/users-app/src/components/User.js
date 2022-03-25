const User = ({id, firstName, lastName, createdAt, status, updateMethod}) => {
    return (
        <div>
            {status == 'locked' ? <h3><s>{firstName} {lastName}</s></h3> : <h3>{firstName} {lastName}</h3>}
            <p>{createdAt}</p>
            <button onClick={() => updateMethod(id, status === "active" ? "locked" : "active")}>Change status</button>
        </div>
    )
}

export default User