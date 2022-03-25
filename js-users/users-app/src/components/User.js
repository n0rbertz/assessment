const User = ({id, firstName, lastName, createdAt, status, updateMethod}) => {
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{createdAt}</p>
            <button onClick={() => updateMethod(id, status === "active" ? "locked" : "active")}>Change status</button>
        </div>
    )
}

export default User