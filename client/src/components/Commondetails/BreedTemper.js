import React from 'react';
import '../../css/index.css';

export default function Breedtemper({breedtemperament, className, innerText}) {
    return (
        <div style={{margin: "0rem"}}>
        {breedtemperament
        ? breedtemperament === 'none'
        ? <div className={className[0]}>
            <span className={className[1]}>{innerText}</span>
            <span className={className[2]}>It seems there is no temperament available for this breed</span>
          </div>
        : <div className={className[0]}>
            <span className={className[1]}>{innerText}</span>
            <span className={className[2]}>{breedtemperament}</span>
          </div>
        :<div className={className[0]}>
          <span className={className[1]}>{innerText}</span>
          <span className={className[2]}>It seems there is no temperament available for this breed</span>
        </div>
        }
        </div>
    )
};