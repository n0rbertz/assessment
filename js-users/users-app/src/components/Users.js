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

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
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
        {users.slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage).map((user) => 
            <User firstName={user.first_name} lastName={user.last_name} createdAt={user.created_at} key={user.id}></User>
        )}
        <Pagination usersPerPage={10} usersCount={users.length} paginate={paginate}></Pagination>
        </>
    )
}

export default Users;