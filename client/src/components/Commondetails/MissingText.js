import React from 'react';
import '../../css/index.css';

export default function Detailstripe({missingtext}) {
    return (
        <div className="Missingtext">
            <span className='missinginfo'>
              {missingtext}
            </span>
         </div>

    )
};

