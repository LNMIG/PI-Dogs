import React from 'react';
import '../../css/index.css';

export default function MissingText({missingtext}) {
    return (
        <div className="Missingtext">
            <span className='missinginfo'>
              {missingtext}
            </span>
         </div>

    )
};

