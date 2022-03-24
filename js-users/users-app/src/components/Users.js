import User from './User'

const Users = ({users}) => {
    return (
        <>
        {users.map((user) => 
            <User firstName={user.first_name} lastName={user.last_name} createdAt={user.created_at}></User>
        )}
        </>
    )
}

export default Users;