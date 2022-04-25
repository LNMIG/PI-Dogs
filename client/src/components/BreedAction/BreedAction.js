import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import '../../css/index.css';
import footprint from '../../assets/footprintviolet.png';

let URL = process.env.REACT_APP_API || 'http://localhost:3001' 

export default function BreedAction (props) {
  
  const [breedState, setBreedState] = useState({});
  const {idBreed} = useParams();
  const {action} = useParams();
  const todo = action.toLowerCase();

  useEffect ( ()=> { 
    async function Fetch (idBreed) {
      const r = await fetch (`${URL}/dog/${todo}/${idBreed}`);
      const json = await r.json();
      setBreedState(json);
    }
    Fetch(idBreed);
  },[idBreed,todo]);


  return (
        <div className="Backdetail">
          <Detailstripe src={footprint} className={"stripeTop"}/>
          <div className='Deleted'>
            <p>{breedState.State}</p>
            <Backhomebutton innerText={"HOME"} adress={"/home"}/>
          </div>
          <Detailstripe src={footprint} className={"stripeBottom"}/>
        </div>
      );
}