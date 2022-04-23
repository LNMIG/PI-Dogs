import React from 'react';
import '../../css/index.css';

export default function FormAdvice({isMessage, handleClick, breedsCreated}) {
   
    return (
        <div className={`FormAdviceGral${isMessage ? "Active" : "Inactive"}`}>
        <div className={`FormAdvice${isMessage ? "Active" : "Inactive"}`} >
            {breedsCreated.newBreed === 'New breed added to database!'
            ?   <div className={`Created${isMessage ? "Active" : "Inactive"}`} >
                    <div className={`Message${isMessage ? "Active" : "Inactive"}`}>
                        {breedsCreated.newBreed}
                    </div>
                    <button className={`Button${isMessage ? "Active" : "Inactive"}`} onClick={handleClick}> continue </button>
                </div>
            :   <div className={`Notcreated${isMessage ? "Active" : "Inactive"}`}>
                    <div className={`Message${isMessage ? "Active" : "Inactive"}`}>
                        {breedsCreated.newBreed}
                    </div>
                    <button className={`Button${isMessage ? "Active" : "Inactive"}`} onClick={handleClick}> continue </button>
                </div>
            }
        </div>
        </div>
    )
};