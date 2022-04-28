import React, { useState} from 'react';
import Button from '../Commondetails/DoSomethingInput.js';

let URL = process.env.REACT_APP_API || 'http://localhost:3001'

export default function FindBreedButton({className, placeholder, handleFindBreed}) {

    const [input,setInput] = useState({ breedName: "" });

    const handleInputChange = function (e) {
        setInput(input => ({...input, breedName: e.target.value }));
    }
    const handleSubmit = async function (e) { 
        e.preventDefault();
        let nameToSend = "";
        if (!input.breedName) return nameToSend = ""; //do nothing. just to keep button GO unefective
        nameToSend = (!/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(input.breedName)) ? "" : input.breedName;
        await fetch (`${URL}/dogs?name=${nameToSend}`)
                .then(r => r.json())
                .then(json => handleFindBreed(json))
                .catch(e => console.log(e))
        setInput(input => ({...input, breedName: "" }));
    };
    return <Button handleSubmit={handleSubmit} handleInputChange={handleInputChange} input={input} className={className} placeholder={placeholder}/>
};