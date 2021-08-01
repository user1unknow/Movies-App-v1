import React from 'react'
import PropTypes from 'prop-types';

export const PaginationButtons = ({ functionPrevPage, functionNextPage, currentPage, total_pages }) => {
    return (
        <div className="d-grid gap-2 d-flex justify-content-between m-4">

            <button onClick={functionPrevPage} className={`btn btn-outline-dark btn-lg border-2 rounded-circle ${currentPage === 1 && 'disabled'}`}>
                <i className="fas fa-arrow-left"></i>
            </button>

            <button onClick={functionNextPage} className={`btn btn-outline-dark border-2 btn-lg rounded-circle ${currentPage === total_pages && 'disabled'}`}>
                <i className="fas fa-arrow-right"></i>
            </button>

        </div>
    )
}

PaginationButtons.propTypes = {
    functionNextPage: PropTypes.func.isRequired,
    functionPrevPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
}