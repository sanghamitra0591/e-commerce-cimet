import "./pagination.css"

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <div className="pagination">
        <div className="prevButton">
          <button
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </div>
        <div className="pageContainer">
          {
            [...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))
          }
        </div>
        <div className="nextButton">
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination;
