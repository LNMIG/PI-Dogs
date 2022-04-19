import React, { useState} from 'react';
import '../../css/index.css';


export default function FindBreedButton({placeholder, handleFindBreed}) {

    const [input,setInput] = useState({ breedName: "" });

    const handleInputChange = function (e) {
        setInput(input => ({...input, breedName: e.target.value }));
    }

    const handleSubmit = async function (e) { 
        e.preventDefault();
        
        let nameToSend = "";
        if (!input.breedName) return nameToSend = "";
        nameToSend = (!/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(input.breedName)) ? "" : input.breedName;
        await fetch (`http://localhost:3001/dogs?name=${nameToSend}`)
                .then(r => r.json())
                .then(json => handleFindBreed(json))
                .catch(e => console.log(e))
        setInput(input => ({...input, breedName: "" }));
    };
    
    return (
        
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="FindBreed" >
                <input className="input" type="text" name="breedName" value={input.breedName} onChange={handleInputChange} placeholder={placeholder}></input>
                <input className="btnGO" type="submit" value="GO"></input>
            </div>
        </form>
    )
};