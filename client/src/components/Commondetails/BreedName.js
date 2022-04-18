import React from 'react';
import '../../css/index.css';

export default function Breedname({breedname, className}) {
    return (
        <div className={className}>
          <p>{breedname}</p>
        </div>
    )
};