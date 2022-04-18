import React from 'react';
import '../../css/index.css';

export default function Detailstripe({src, className}) {
    return (
        <div className={className}>
            <img className="image" src={src} alt="BI"/>
            puppies lovers
            <img className="image" src={src} alt="BI"/>
        </div>
    )
};