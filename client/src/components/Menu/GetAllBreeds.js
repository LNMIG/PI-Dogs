import React from 'react';
import Button from '../Commondetails/DoSomethingButton.js';

let URL = process.env.REACT_APP_API || 'http://localhost:3001'

export default function GetAllBreeds({className, handleFindBreed, placeholder}) {

    const handleSubmit = async function (e) { 
        e.preventDefault();
        await fetch (`${URL}/dogs`)
                .then(r => r.json())
                .then(json => handleFindBreed(json))
                .catch(e => console.log(e))
    };

    return <Button handleSubmit={handleSubmit} className={className} placeholder={placeholder}/>
};
