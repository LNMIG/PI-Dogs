import React from 'react';
import '../../css/index.css';

function Pagination ({totalPages, handleOnClick, className}) {

  return (
    <nav className={className}>
      <ul className="ULcontainer">
        {totalPages.map(number => (
          <span key={number}>
            <button className="PageBtn" onClick={()=> handleOnClick(number)} >{number}</button>
          </span>
        ))}
      </ul>
    </nav>
  )
};

export default Pagination;

