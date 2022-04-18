import React from 'react';
import Breedname from '../Commondetails/BreedName.js';
import Breedimage from '../Commondetails/BreedImage.js';
import Breedtemper from '../Commondetails/BreedTemper.js';
import Breedoutput from '../Commondetails/BreedOutput.js';
import missing from '../../assets/missingdog.png';
import '../../css/index.css';

export default function Breedcard ({breeds, loading, className}) {
    
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (

        <div className={className}>
            {breeds.map(breeds => (
                <div key={breeds.id} className="smallcontainer">
                    <Breedimage breedimage={breeds.image!=="none" ? breeds.image : missing} missing={""} className={"image"}/>
                    <Breedname breedname={breeds.name} className={"cardname"}/>
                    <Breedtemper breedtemperament={breeds.temperament} className={['data1','','']} innerText={''}/>
                    <Breedoutput breedoutinnerText={"Weight:"} breedoutcharacteristic={breeds.weight} label={"(Kg)"} className={['data2','L','R']}/>
                </div>
             ))}
        </div>
    )
};