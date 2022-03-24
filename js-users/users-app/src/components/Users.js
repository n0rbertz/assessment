import User from './User'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'

const Users = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await fetch("https://assessment-users-backend.herokuapp.com/users")
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers()
            setUsers(users)
        }        
        getUsers()
    }, [])

    return (
        <>
        {users.map((user) => 
            <User firstName={user.first_name} lastName={user.last_name} createdAt={user.created_at}></User>
        )}
        <Pagination usersPerPage={10} usersCount={users.length}></Pagination>
        </>
    )
}

export default Users;