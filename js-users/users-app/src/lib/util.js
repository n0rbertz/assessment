function getUsersOfCurrentPage(users, currentPage, postsPerPage) {
    return users.slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage)
}

export default getUsersOfCurrentPage