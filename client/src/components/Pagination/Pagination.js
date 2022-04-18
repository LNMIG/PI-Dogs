import React from 'react';

function Pagination ({totalPages, handleOnClick, className}) {

  return (
    <nav className={className}>
      <ul>
        {totalPages.map(number => (
          <span key={number}>
            <button onClick={()=> handleOnClick(number)} >{number}</button>
          </span>
        ))}
      </ul>
    </nav>
  )
};

export default Pagination;

