import User from './User'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'

const Users = () => {

    const postsPerPage = 10;
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = async () => {
        const res = await fetch("https://assessment-users-backend.herokuapp.com/users")
        const data = await res.json()
        return data
    }

    const getUsers = async () => {
        const users = await fetchUsers()
        setUsers(users)
    }

    async function updateUserStatus(id, newStatus)  {
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify({
                status:newStatus
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, requestOptions)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        getUsers()
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {        
        getUsers()
    }, [])

    return (
        <>
        {users.slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage).map((user) =>
            <div> 
                <User id={user.id} firstName={user.first_name} lastName={user.last_name} createdAt={user.created_at} status={user.status} key={user.id} updateMethod={updateUserStatus}></User>
            </div>
        )}
        <Pagination usersPerPage={10} usersCount={users.length} paginate={paginate}></Pagination>
        </>
    )
}

export default Users;