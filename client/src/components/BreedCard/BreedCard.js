import React from 'react';
import { NavLink } from 'react-router-dom';
import Breedname from '../Commondetails/BreedName.js';
import Breedimage from '../Commondetails/BreedImage.js';
import Breedtemper from '../Commondetails/BreedTemper.js';
import Breedoutput from '../Commondetails/BreedOutput.js';
import missing from '../../assets/missingdog.png';
import '../../css/index.css';

export default function Breedcard ({breeds, loading, className}) {

    let A = "undefined", B = "none", C = "https://cdn2.thedogapi.com/images/undefined.jpg", D = "https://cdn2.thedogapi.com/images/.jpg";

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (

        <div className={className}>
            {breeds.map(breeds => (
                <NavLink key={breeds.id} exact to={`/dogs/${breeds.id}`} className="cardAsLink">
                    <div  className="Smallcontainer" >
                        <Breedimage breedimage={breeds.image !== A ? breeds.image !== B ? breeds.image !== C ? breeds.image !== D ? breeds.image : missing: missing : missing : missing} missing={""} className={"image"}/>
                        <Breedname breedname={breeds.name} className={"cardname"}/>
                        <Breedtemper breedtemperament={breeds.temperament} className={['data1','','']} innerText={''}/>
                        <Breedoutput breedoutinnerText={"Weight:"} breedoutcharacteristic={breeds.weight} label={"(Kg)"} className={['data2','L','R']}/>
                    </div>
                </NavLink>
             ))}
        </div>
    )
};