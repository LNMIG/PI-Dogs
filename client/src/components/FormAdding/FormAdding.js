import React, { useState, useEffect, Fragment } from 'react';
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
  const breedsCreated = useSelector(state => state.breedCreated)
  const temperList = useSelector(state => state.temperslist)
  const [input,setInput] = useState({ breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[""] });
  const [errors, setErrors] = useState({breedName:""});
  const [temper, setTemper] = useState({selectedTemper:null});
  const options = []
  temperList.forEach(temper => options.push({value:temper.id, label:temper.name}))
 
  useEffect(() => { dispatch(getTemperaments()) }, [dispatch]);

  const handleSubmit = function (e) {
    e.preventDefault();
    let newT=[];
    if (temper.selectedTemper !== null) { 
      newT = temper.selectedTemper.map(t => {return t.label});
    } else {
      newT = input.temperaments;
    }
    let POST = {name: input.breedName, height:`${input.heightMin} - ${input.heightMax}`, weight:`${input.weightMin} - ${input.weightMax}`, life_span:`${input.life_span} years`, image: input.image, temperaments: newT};    dispatch(postNewBreed(POST));
    
    setInput({breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[""]}); // hace que los campos input queden limpios una vez que submiteas
    setErrors({breedName:""});
    setTemper({selectedTemper:null});
  }
  const handleInputChange = function (e) {
    setInput({...input, [e.target.name] : e.target.value});
    setErrors(Validate({...input, [e.target.name]: e.target.value}));
  }
  const handleSelectTempers = function (selectedTemper) {
    setTemper({ selectedTemper });
  }
  const disableTest = function () {
      return Object.keys(errors).length;
  }

  return (
    <Fragment>
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
             <Formselect options={options} value={temper.selectedTemper} onChange={handleSelectTempers}/>
{/*SUBMIT FORM --------------------------------------------------------------*/}
             <Formsubmit errors={errors} disableTest={disableTest}/>
        </div>
      </form>
{/*BOTTOM & STRIP -------------------------------------------------------------*/}
      <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
      </div>
{/*ADVICE -------------------------------------------------------------------*/}
      <Formadvice breedsCreated={breedsCreated}/>
      <Detailstripe src={footprint} className={"stripeBottom"}/>
    </div>
    </Fragment>
  )
};