const User = ({user}) => {
    return (
        <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.created_at}</p>
        </div>
    )
}

export default User