const User = ({firstName, lastName, createdAt}) => {
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{createdAt}</p>
        </div>
    )
}

export default User