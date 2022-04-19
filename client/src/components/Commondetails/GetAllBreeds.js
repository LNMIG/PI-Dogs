import React from 'react';
import '../../css/index.css';


export default function GetAllBreeds({handleFindBreed, placeholder}) {

    const handleSubmit = async function (e) { 
        e.preventDefault();
        await fetch (`http://localhost:3001/dogs`)
                .then(r => r.json())
                .then(json => handleFindBreed(json))
                .catch(e => console.log(e))
    };

    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="FindAll" >
              <input className="btnAll" type="submit" value={placeholder}></input>
            </div>
        </form>
    )
};
