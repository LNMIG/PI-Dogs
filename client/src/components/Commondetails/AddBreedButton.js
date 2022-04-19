import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/index.css';

export default function AddBreedButton({innerText, adress}) {
    return (
        <div className="Addbreed" >
            <div className="btn" >
              <NavLink className="btn-link" exact to={adress} >{innerText}</NavLink>
            </div>
        </div>
    )
};