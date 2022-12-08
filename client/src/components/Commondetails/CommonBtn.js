import { NavLink } from 'react-router-dom';
import '../../css/index.css';

export default function CommonBtn({idBreed, innerText, className}) {
    const action = innerText.toLowerCase();

    return (
        <NavLink to={`/dog/${action}/${idBreed}/${action}`} className={className} >{innerText}</NavLink>
    )
}
