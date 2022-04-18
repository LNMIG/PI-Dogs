import React from 'react';
import '../../css/index.css';

export default function Breedoutput({breedoutinnerText, breedoutcharacteristic, label, className}) {
    return (
        <div className={className[0]}>
          <span className={className[1]}>{breedoutinnerText}</span>
          <span className={className[2]}>{breedoutcharacteristic} {label}</span>
        </div>
    )
};