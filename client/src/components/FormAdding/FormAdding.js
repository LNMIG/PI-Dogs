import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { addNewBreed } from '../../redux/actions';
import '../../css/index.css';
//import missing from '../../assets/missingdog.png';
import footprint from '../../assets/footprintviolet.png';

export function validate(input) {

    let errors = {};

    if (!input.breedName) {
        errors.breedName = "Breed name is required";
    } else if(!/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3})+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(input.breedName)) {
        errors.breedName = "Breed name is invalid";
    }
// Check URL is type of: http or https : // something.com / something (!? not allowed)
    if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(input.image)) {
        errors.image = "URL is invalid";
    }
// Check Height to be number and exists and Min is smaller than Max 
    if(!input.heightMin) {
        console.log('min no existe')
        errors.heightMin = "Minimum height is required";
    } else if (!/^([0-9])*$/.test(input.heightMin)) {
        console.log('min no es numero')
        errors.heightMin = "Minimum height must be a number";
    } 

    if (Number(input.heightMin) > Number(input.heightMax)) {
        console.log('min es mayor')
        console.log(typeof(input.heightMin))
        console.log(typeof(input.heightMax))
        errors.heightMax = "Maximum Height must be larger than Min Height";
      }

    if (!input.heightMax) {
        console.log('ma no existe')
          errors.heightMax = "Maximum height is required";
    } else if (!/^([0-9])*$/.test(input.heightMax)) {
        console.log('max no es numero')
          errors.heightMax = "Maximum height must be a number";
    }
    
    if (Number(input.heighMax) < Number(input.heightMin)) {
        console.log('max es menor')
        errors.heightMin = "Minimum Height must be smaller than Max Height";
    }
// Check Weight to be number and exists and Min is smaller than Max
    if(!input.weightMin) {
        errors.weightMin = "Minimum weight is required";
    } else if (!/^([0-9])*$/.test(input.weightMin)) {
        errors.weightMin = "Minimum weight must be a number";
    } 

    if (Number(input.weightMin) > Number(input.weightMax)) {
        errors.weightMax = "Maximum Weight must be larger than Min Weight";
    }

    if (!input.weightMax) {
          errors.weightMax = "Maximum weight is required";
    } else if (!/^([0-9])*$/.test(input.weightMax)) {
          errors.weightMax = "Maximum weight must be a number";
    } 

    if (Number(input.weightMax) < Number(input.weightMin)) {
        errors.weightMin = "Minimum Weight must be smaller than Max Weight";
    }
// Check LIFE_SPAN to be as: 1 - 2, 10 - 10, doesn't check min < max
    if (!input.life_span) {
        errors.life_span = "Life span is required";
    } else if (!/^([0-9]{1,2}) - ([0-9]{1,2})$/.test(input.life_span)) {
        errors.life_span = "Life span should match the pathern 10 - 20";
    }

    return errors;
}


export default function  Form() {

  const [input,setInput] = useState({
        breedName:"",
        heightMin:"",
        heightMax:"",
        weightMin:"",
        weightMax:"",
        life_span:"",
        image:"",
        temperaments:""});

  const [errors, setErrors] = useState({breedName:""});

  const handleSubmit = function (e) {
    e.preventDefault();
    setInput({breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:""}); // hace que los campos input queden limpios una vez que submiteas
  }

  const handleInputChange = function (e) {
    setInput({...input, [e.target.name] : e.target.value});
    setErrors(validate({...input, [e.target.name]: e.target.value}));
    }

  const disableTest = function () {
      return Object.keys(errors).length;
    }

  return (
    <div className="backdetail">
    {/*---------------------------------------------------*/}
      <div className="stripe">
        <img className="image" src={footprint} alt="BI"/>
        puppies lovers
        <img className="image" src={footprint} alt="BI"/>
      </div>
    {/*---------------------------------------------------*/}
      <form className='container' onSubmit={handleSubmit}>
        <div className="name">
          <p>Add your own breed</p>
        </div>
    {/*---------------------------------------------------*/}
        <div className='formcontainer'>

            <div className='divtag'>
              <label className='L'>Breed name:</label>
              <input className={errors.breedName ? 'danger' : 'R'} type="text" name="breedName" value={input.breedName} onChange={handleInputChange} placeholder='Just letters: Alaskan Husky'></input>
              {errors.breedName && (<p className='danger'>{errors.breedName}</p>)}
              <label className='simbol'></label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Height |min|:</label>
              <input className={errors.heightMin ? 'danger' : 'R'} type="text" name="heightMin" value={input.heightMin} onChange={handleInputChange} placeholder='Just a number: 22'></input>
              {errors.heightMin && (<p className='danger'>{errors.heightMin}</p>)}
              <label className='simbol'>cm</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Height |max|:</label>
              <input className={errors.heightMax ? 'danger' : 'R'} type="text" name="heightMax" value={input.heightMax} onChange={handleInputChange} placeholder='Just a number: 40'></input>
              {errors.heightMax && (<p className='danger'>{errors.heightMax}</p>)}
              <label className='simbol'>cm</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Weight |min|:</label>
              <input className={errors.weightMin ? 'danger' : 'R'} type="text" name="weightMin" value={input.weightMin} onChange={handleInputChange} placeholder='Just a number: 18'></input>
              {errors.weightMin && (<p className='danger'>{errors.weightMin}</p>)}
              <label className='simbol'>Kg</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Weight |max|:</label>
              <input className={errors.weightMax ? 'danger' : 'R'} type="text" name="weightMax" value={input.weightMax} onChange={handleInputChange} placeholder='Just a number: 32'></input>
              {errors.weightMax && (<p className='danger'>{errors.weightMax}</p>)}
              <label className='simbol'>Kg</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Estimated lifetime:</label>
              <input className={errors.life_span ? 'danger' : 'R'} type="text" name="life_span" value={input.life_span} onChange={handleInputChange} placeholder='Example: 10 - 18'></input>
              {errors.life_span && (<p className='danger'>{errors.life_span}</p>)}
              <label className='simbol'>years</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Image:</label>
              <input className={errors.image ? 'danger' : 'R'} type="text" name="image" value={input.image} onChange={handleInputChange} placeholder='insert a valid URL'></input>
              {errors.image && (<p className='danger'>{errors.image}</p>)}
              <label className='simbol'>URL</label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Temperaments:</label>
              <input className={errors.temperaments ? 'danger' : 'R'} type="text" name="temperaments" value={input.temperaments} onChange={handleInputChange} placeholder='select as many as desired'></input>
              {errors.temperaments && (<p className='danger'>{errors.temperaments}</p>)}
              <label className='simbol'></label>
            </div>
            {/*---------------------------------------------------*/}
            <div className='send'>
                <input className={Object.keys(errors).length ? "notactive": "active"} type="submit" value="SUBMIT" disabled={disableTest()} />
            </div>
        </div>
      </form>

    {/*---------------------------------------------------*/}
      <div className="tryus" >
        <div className="btn" >
          <NavLink className="btn-link" exact to="/home" >BACK HOME</NavLink>
        </div>
      </div>
        {/*---------------------------------------------------*/}
      <div className="stripe">
        <img className="image" src={footprint} alt="BI"/>
          puppies lovers
        <img className="image" src={footprint} alt="BI"/>
      </div>
    </div>
  )
}