import User from './User'
import {useState, useEffect} from 'react'
import Pagination from './Pagination'
import Header from './Header'
import getUsersOfCurrentPage from '../lib/util'

const Users = () => {

    const postsPerPage = 10;
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = async () => {
        await fetch("https://assessment-users-backend.herokuapp.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
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
        fetchUsers()
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {        
        fetchUsers()
    }, [])

    return (
        <>
        <Header></Header>
        {getUsersOfCurrentPage(users, currentPage, postsPerPage).map((user) =>
            <div key={user.id}> 
                <User id={user.id} firstName={user.first_name} lastName={user.last_name} createdAt={user.created_at} status={user.status} updateMethod={updateUserStatus} />
            </div>
        )}
        <Pagination usersPerPage={10} usersCount={users.length} paginate={paginate}></Pagination>
        </>
    )
}

export default Users;