import React from 'react'

const Pagination = ({usersPerPage, usersCount, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(usersCount / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
      <div className="pagination">
          {pageNumbers.map((pageNumber) => 
              <button className="btn" onClick={() => paginate(pageNumber)} key={pageNumber}>{pageNumber}</button>
          )}
      </div>
    )

}

export default Pagination

