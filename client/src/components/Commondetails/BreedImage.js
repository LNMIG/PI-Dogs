import React from 'react';
import '../../css/index.css';

export default function Breedimage({breedimage, missing, className}) {
    return (
        <div>
          {breedimage === 'none'
          ? <img className={className} src={missing} alt="BI"/>
          : <img className={className} src={breedimage} alt="BI"/>
          }
        </div>
    )
}