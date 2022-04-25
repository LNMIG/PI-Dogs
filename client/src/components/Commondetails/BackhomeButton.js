import { NavLink } from 'react-router-dom';
import '../../css/index.css';

export default function BackhomeButton({innerText, adress}) {
    return (
        <div className="Backhome" >
            <div className="btn" >
              <NavLink className="btn-link" exact to={adress} >{innerText}</NavLink>
            </div>
        </div>
    )
};