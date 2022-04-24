import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Missingtext from '../Commondetails/MissingText.js';
import Breedname from '../Commondetails/BreedName.js';
import Breedimage from '../Commondetails/BreedImage.js';
import Breedtemper from '../Commondetails/BreedTemper.js';
import Breedoutput from '../Commondetails/BreedOutput.js';
import '../../css/index.css';
import missing from '../../assets/missingdog.png';
import footprint from '../../assets/footprintviolet.png';


const BreedDetail = (props) => {
  const [breedDetail, setBreedDetail] = useState({});
  const {idBreed} = useParams();

  useEffect ( ()=> { 
    async function Fetch (idBreed) {
      const r = await fetch (`http://localhost:3001/dogs/${idBreed}`);
      const json = await r.json();
      setBreedDetail(json);
    }
    Fetch(idBreed);
  },[idBreed]);

  if (Object.entries(breedDetail).length === 0) {
    return (
      <div className="Backdetail">
        <Detailstripe src={footprint} className={"stripeTop"}/>
        <div className='Main-Form-Container'>
          <Missingtext missingtext={"There is not such breed you are looking for."}/>
          <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
        </div>
        <Detailstripe src={footprint} className={"stripeBottom"}/>
      </div>
    );

  } else {

      return (
        <div className="Backdetail">
          <Detailstripe src={footprint} className={"stripeTop"}/>
          <div className='Main-Form-Container'>
            <div className="Existinginfo">
                <Breedname breedname={breedDetail.name} className={'name'}/>
                <Breedimage breedimage={breedDetail.image} missing={missing} className={'image'}/>
                <Breedtemper breedtemperament={breedDetail.temperament} className={['data1','T','D']} innerText={'Temperament'}/>
                <Breedoutput breedoutinnerText={"Height:"} breedoutcharacteristic={breedDetail.height} label={"(cm)"} className={['data2','L','R']}/>
                <Breedoutput breedoutinnerText={"Weight:"} breedoutcharacteristic={breedDetail.weight} label={"(Kg)"} className={['data2','L','R']}/>
                <Breedoutput breedoutinnerText={"Estimated life span:"} breedoutcharacteristic={breedDetail.life_span} label={""} className={['data2','L','R']}/>
            </div>
            <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
          </div>
          <Detailstripe src={footprint} className={"stripeBottom"}/>
        </div>
      );
    }
}
export default BreedDetail