import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./pagination.css";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [location.search, setCurrentPage]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      navigate(`?page=${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      navigate(`?page=${currentPage + 1}`);
    }
  };

  const handlePageClick = (pageIndex) => {
    navigate(`?page=${pageIndex + 1}`);
  };

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
                onClick={() => handlePageClick(index)}
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
  );
};

export default Pagination;
