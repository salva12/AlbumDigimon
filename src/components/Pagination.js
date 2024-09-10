import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];

    // Mostrar siempre la primera página
    if (currentPage > 3) {
      pages.push(1);
      if (currentPage > 4) {
        pages.push('...');
      }
    }

    // Páginas alrededor de la página actual
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    // Mostrar siempre la última página
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a href="#">
              <button className="page-link" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
              </button>
            </a>
          </li>
          {getPages().map((page, index) => (
            <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              {page === '...' ? (
                <span className="page-link">...</span>
              ) : (
                <a href="#">
                  <button className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                  </button>
                </a>

              )}
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a href="#">
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} >
              Siguiente
            </button>
          </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
