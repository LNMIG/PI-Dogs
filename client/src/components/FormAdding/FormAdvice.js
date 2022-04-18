import React from 'react';
import '../../css/index.css';

export default function FormAdvice({breedsCreated}) {
        return (
            <div>
                {breedsCreated.newBreed==='New breed added to database!'
                ? <div className="created" >{breedsCreated.newBreed}</div>
                : breedsCreated.newBreed==='Sorry, new breed not added. There is already a breed matching yours'
                ? <div className="notcreated">{breedsCreated.newBreed}</div>
                : null
                }
            </div>
        )
};