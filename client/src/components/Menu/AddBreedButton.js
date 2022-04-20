import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AddBreedButton({className, innerText, adress}) {
    return (
        <div className={className[0]} >
            <div className={className[1]} >
              <NavLink className={className[2]} exact to={adress} >{innerText}</NavLink>
            </div>
        </div>
    )
};