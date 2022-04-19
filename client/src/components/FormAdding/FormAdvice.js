import React from 'react';
import '../../css/index.css';

export default function FormAdvice({breedsCreated}) {
    return (
        <div className='FormAdvice'>
            {breedsCreated.newBreed==='New breed added to database!'
            ?<div className='created' >{breedsCreated.newBreed}</div>
            : breedsCreated.newBreed==='Sorry, new breed not added. There is already a breed matching yours'
            ? <div className='notcreated' disabled={true} ><div>{breedsCreated.newBreed}</div>Try again</div>
            : null
            }
        </div>
    )
};