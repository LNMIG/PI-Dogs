import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CustomSelect from './Select.js';
import { postNewBreed, getTemperaments } from '../../redux/actions';
import '../../css/index.css';
import footprint from '../../assets/footprintviolet.png';

export function validate(input) {

    let errors = {};

    if (!input.breedName) {
        errors.breedName = "Breed name is required";
    } else if(!/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(input.breedName)) {
        errors.breedName = "Breed name is invalid";
    }
// Check URL is type of: http or https : // something.com / something.image format
    //if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(input.image)) { // Does not check image extensions. (!? not allowed)
    if(input.image==='none') {
      delete errors.image;
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.image)) {
      errors.image = "URL is invalid";
    }
// Check Height to be number and exists and Min is smaller than Max 
    if(!input.heightMin) {
        errors.heightMin = "Min Height is required";
    } else if (!/^([0-9])*$/.test(input.heightMin)) {
        errors.heightMin = "Min Height must be a number";
    } 

    if (Number(input.heightMin) > Number(input.heightMax)) {
        errors.heightMax = "Max Height must be larger than Min Height";
      }

    if (!input.heightMax) {
          errors.heightMax = "Max Height is required";
    } else if (!/^([0-9])*$/.test(input.heightMax)) {
          errors.heightMax = "Max Height must be a number";
    }
    
    if (Number(input.heighMax) < Number(input.heightMin)) {
        errors.heightMin = "Min Height must be smaller than Max Height";
    }
// Check Weight to be number and exists and Min is smaller than Max
    if(!input.weightMin) {
        errors.weightMin = "Min Weight is required";
    } else if (!/^([0-9])*$/.test(input.weightMin)) {
        errors.weightMin = "Min Weight must be a number";
    } 

    if (Number(input.weightMin) > Number(input.weightMax)) {
        errors.weightMax = "Max Weight must be larger than Min Weight";
    }

    if (!input.weightMax) {
          errors.weightMax = "Max Weight is required";
    } else if (!/^([0-9])*$/.test(input.weightMax)) {
          errors.weightMax = "Max Weight must be a number";
    } 

    if (Number(input.weightMax) < Number(input.weightMin)) {
        errors.weightMin = "Min Weight must be smaller than Max Weight";
    }
// Check LIFE_SPAN to be as: 1 - 2, 10 - 10, doesn't check min < max
    if(input.life_span==='none') {
        delete errors.image;    
    } else if (!input.life_span) {
        errors.life_span = "Life span is required";
    } else if (!/^([0-9]{1,2}) - ([0-9]{1,2})$/.test(input.life_span)) {
        errors.life_span = "Life span should match the pathern 10 - 20";
    }

    return errors;
}


export default function  Form(props) {
  
  const dispatch = useDispatch()
  const breedsCreated = useSelector(state => state.breedCreated)
  const temperList = useSelector(state => state.temperslist)
  
  const options = []
  temperList.forEach(temper => options.push({value:temper.id, label:temper.name}))
 
  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch])

  const [input,setInput] = useState({
        breedName:"",
        heightMin:"",
        heightMax:"",
        weightMin:"",
        weightMax:"",
        life_span:"",
        image:"",
        temperaments:[""] });

  const [errors, setErrors] = useState({breedName:""});
  const [terms, setTerms] = useState({selectedTerm:null});

  const handleSubmit = function (e) {
    e.preventDefault();
    let newT=[]
    if (terms.selectedTerm !== null) { 
      newT = terms.selectedTerm.map(t => {return t.label});
    } else {
      newT = input.temperaments;
    }

    let POST = {name: input.breedName, height:`${input.heightMin} - ${input.heightMax}`,
                 weight:`${input.weightMin} - ${input.weightMax}`, life_span:`${input.life_span} years`,
                  image: input.image, temperaments: newT};
    console.log(POST);
    dispatch(postNewBreed(POST));
    
    setInput({breedName:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[""]}); // hace que los campos input queden limpios una vez que submiteas
    setErrors({breedName:""});
    setTerms({selectedTerm:null});
  }

  const handleInputChange = function (e) {
    setInput({...input, [e.target.name] : e.target.value});
    setErrors(validate({...input, [e.target.name]: e.target.value}));
    }
  const handleSelectTempers = function (selectedTerm) {
    console.log(selectedTerm);
    setTerms({ selectedTerm });
  }

  const disableTest = function () {
      return Object.keys(errors).length;
    }


  return (
    <Fragment>
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
{/*GET NAME ----------------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Breed name:</label>
              <input className={errors.breedName ? 'danger' : 'R'} type="text" name="breedName" value={input.breedName} onChange={handleInputChange} placeholder='Just letters: Alaskan Husky'></input>
              {errors.breedName && (<p className='danger'>{errors.breedName}</p>)}
              <label className='simbol'></label>
            </div>
{/*GET MIN HEIGHT -----------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Height |min|:</label>
              <input className={errors.heightMin ? 'danger' : 'R'} type="text" name="heightMin" value={input.heightMin} onChange={handleInputChange} placeholder='Just a number: 22'></input>
              {errors.heightMin && (<p className='danger'>{errors.heightMin}</p>)}
              <label className='simbol'>cm</label>
            </div>
{/*GET MAX HEIGHT -----------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Height |max|:</label>
              <input className={errors.heightMax ? 'danger' : 'R'} type="text" name="heightMax" value={input.heightMax} onChange={handleInputChange} placeholder='Just a number: 40'></input>
              {errors.heightMax && (<p className='danger'>{errors.heightMax}</p>)}
              <label className='simbol'>cm</label>
            </div>
{/*GET MIN WEIGHT -----------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Weight |min|:</label>
              <input className={errors.weightMin ? 'danger' : 'R'} type="text" name="weightMin" value={input.weightMin} onChange={handleInputChange} placeholder='Just a number: 18'></input>
              {errors.weightMin && (<p className='danger'>{errors.weightMin}</p>)}
              <label className='simbol'>Kg</label>
            </div>
{/*GET MAX WEIGHT -----------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Weight |max|:</label>
              <input className={errors.weightMax ? 'danger' : 'R'} type="text" name="weightMax" value={input.weightMax} onChange={handleInputChange} placeholder='Just a number: 32'></input>
              {errors.weightMax && (<p className='danger'>{errors.weightMax}</p>)}
              <label className='simbol'>Kg</label>
            </div>
{/*GET LIFE SPAN ------------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Estimated lifetime:</label>
              <input className={errors.life_span ? 'danger' : 'R'} type="text" name="life_span" value={input.life_span} onChange={handleInputChange} placeholder='e.g.: 10 - 18 OR "none"'></input>
              {errors.life_span && (<p className='danger'>{errors.life_span}</p>)}
              <label className='simbol'>years</label>
            </div>
{/*GET IMAGE URL ------------------------------------------------------------*/}
            <div className='divtag'>
              <label className='L'>Image:</label>
              <input className={errors.image ? 'danger' : 'R'} type="text" name="image" value={input.image} onChange={handleInputChange} placeholder='insert valid URL OR "none"'></input>
              {errors.image && (<p className='danger'>{errors.image}</p>)}
              <label className='simbol'>URL</label>
            </div>
{/*TEMPERAMENTS -------------------------------------------------------------*/}
             <CustomSelect options={options} value={terms.selectedTerm}
             onChange={handleSelectTempers}/>
{/*SUBMIT FORM --------------------------------------------------------------*/}
            <div className='send'>
                <input className={Object.keys(errors).length ? "notactive": "active"} type="submit" value="SUBMIT" disabled={disableTest()} />
            </div>
        </div>
      </form>

{/*ADVICE -------------------------------------------------------------------*/}
    {breedsCreated.newBreed==='New breed added to database!'
     ? <div className="created" >{breedsCreated.newBreed}</div>
     : breedsCreated.newBreed==='Sorry, new breed not added. There is already a breed matching yours'
     ? <div className="notcreated">{breedsCreated.newBreed}</div>
     : null
    }
{/*BOTTOM STRIP -------------------------------------------------------------*/}
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
    </Fragment>
  )
};
