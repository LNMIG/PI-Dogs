import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/index.css';

export default function BackhomeButton() {
    return (
        <div className="Backhome" >
            <div className="btn" >
              <NavLink className="btn-link" exact to="/home" >BACK HOME</NavLink>
            </div>
        </div>
    )
};