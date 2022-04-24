import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewBreed, getTemperaments } from '../../redux/actions';
import Validate from './Validateinput.js';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Formselect from './FormSelect.js';
import Formadvice from './FormAdvice.js';
import Formsubmit from './FormSubmit.js';
import Forminputs from './FormInputs.js';
import '../../css/index.css';
import footprint from '../../assets/footprintviolet.png';

export default function  Form(props) {
  
  const dispatch = useDispatch()
  let breedsCreated = useSelector(state => state.breedCreated)
  const allTempers = useSelector(state => state.temperslist)
  const [input,setInput] = useState({ breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[] });
  //const [input,setInput] = useState({ breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[],addedtemperaments:"" });
  const [errors, setErrors] = useState({breedName:""});
  const [temper, setTemper] = useState({selectedTemper:[]});
  const options = []
  allTempers.forEach(t => options.push({value: t.name.toUpperCase(), label: t.name.toUpperCase()}))
  const [isMessage, setIsMessage] = useState(false);

  useEffect(() => { dispatch(getTemperaments()) }, [dispatch]);

  const handleSubmit = function (e) {
    e.preventDefault();
    let newT=[];
    if (temper.selectedTemper === []) {newT = input.temperaments;} 
    newT = temper.selectedTemper.map(t => t.charAt(0)+t.slice(1).toLowerCase() );
    
    let POST = {name: input.breedName, height:`${input.heightMin} - ${input.heightMax}`, weight:`${input.weightMin} - ${input.weightMax}`, life_span:`${input.life_span} years`, image: input.image, temperaments: newT};
    dispatch(postNewBreed(POST));
    
    setInput({breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[]}); // hace que los campos input queden limpios una vez que submiteas
    setErrors({breedName:""});
    setTemper({selectedTemper:[]});
    setIsMessage(true);
  }
  const handleInputChange = function (e) {
    setInput({...input, [e.target.name] : e.target.value});
    setErrors(Validate({...input, [e.target.name]: e.target.value}));
  }

  const handleSelectTempers = function (selectedT) {
      if(temper.selectedTemper.includes(selectedT.target.value)) {
        let position = temper.selectedTemper.indexOf(selectedT.target.value);
        let actual = temper.selectedTemper;
        actual.splice(position, 1)
        setTemper(temper => ({...temper, selectedTemper: actual }));
      } else {
        setTemper(temper => ({...temper, selectedTemper: temper.selectedTemper.concat(selectedT.target.value) }));
      }
  }
  const disableTest = function () {
      return Object.keys(errors).length;
  }
  const handleClick = function () {
      setIsMessage(false);
  }

  return (
    <div>
    <div className="Backdetail">
      <Detailstripe src={footprint} className={"stripeTop"}/>
      <div className='Main-Form-Container'>
      <form className='container' onSubmit={handleSubmit}>
        <div className="name"><p>Add your own breed</p></div>
        <div className='inputcontainer'>
{/*GET NAME ----------------------------------------------------------------*/}
            <Forminputs innerText={"Breed name:"} errors={errors.breedName} type={"text"} name={"breedName"}
                        input={input.breedName} handleInputChange={handleInputChange} placeholder={"Just letters: Alaskan Husky"}/>
{/*GET MIN HEIGHT -----------------------------------------------------------*/}
            <Forminputs innerText={"Height |min|:"} errors={errors.heightMin} type={"text"} name={"heightMin"}
                        input={input.heightMin} handleInputChange={handleInputChange} placeholder={"Just a number: 22"} label={"cm"}/>
{/*GET MAX HEIGHT -----------------------------------------------------------*/}
            <Forminputs innerText={"Height |max|:"} errors={errors.heightMax} type={"text"} name={"heightMax"}
                        input={input.heightMax} handleInputChange={handleInputChange} placeholder={"Just a number: 40"} label={"cm"}/>
{/*GET MIN WEIGHT -----------------------------------------------------------*/}
            <Forminputs innerText={"Weight |min|:"} errors={errors.weightMin} type={"text"} name={"weightMin"}
                        input={input.weightMin} handleInputChange={handleInputChange} placeholder={"Just a number: 18"} label={"Kg"}/>
{/*GET MAX WEIGHT -----------------------------------------------------------*/}
            <Forminputs innerText={"Weight |max|:"} errors={errors.weightMax} type={"text"} name={"weightMax"}
                        input={input.weightMax} handleInputChange={handleInputChange} placeholder={"Just a number: 32"} label={"Kg"}/>
{/*GET LIFE SPAN ------------------------------------------------------------*/}
            <Forminputs innerText={"Estimated lifetime:"} errors={errors.life_span} type={"text"} name={"life_span"}
                        input={input.life_span} handleInputChange={handleInputChange} placeholder={'e.g.: 10 - 18 OR  "none"'} label={"years"}/>
{/*GET IMAGE URL ------------------------------------------------------------*/}
            <Forminputs innerText={"Image"} errors={errors.image} type={"text"} name={"image"}
                       input={input.image} handleInputChange={handleInputChange} placeholder={'insert valid URL OR "none"'} label={"URL"}/>
{/*TEMPERAMENTS -------------------------------------------------------------*/}
             <Formselect options={options} value={temper.selectedTemper} placeholder={["Select temperaments"]} onChange={handleSelectTempers} />
{/*SUBMIT FORM --------------------------------------------------------------*/}
             <Formsubmit errors={errors} disableTest={disableTest}/>
        </div>
      </form>
{/*BOTTOM & STRIP -------------------------------------------------------------*/}
      <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
      </div>
{/*ADVICE -------------------------------------------------------------------*/}
      <Formadvice isMessage={isMessage} handleClick={handleClick} breedsCreated={breedsCreated}/>
      <Detailstripe src={footprint} className={"stripeBottom"}/>
    </div>
    </div>
  )
};