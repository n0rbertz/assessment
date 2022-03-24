import React from 'react'

const Pagination = ({usersPerPage, usersCount}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(usersCount / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
      <div>
          {pageNumbers.map((pageNumber) => 
              <span style={{padding: "10px"}}>{pageNumber}</span>
          )}
      </div>
    )

}

export default Pagination

