//import React from 'react';


export default function Validate(input) {

    let errors = {};

// Check Breed Name to be leters between 3 and 30 characters
    if (!input.breedName) {
        errors.breedName = "Breed name is required";
    } else if(!/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})+\.?(( |-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/.test(input.breedName)) {
        errors.breedName = "Breed name is invalid";
    }

// Check URL is type of: http or https : // something.com / something.image format
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
    
    if (Number(input.heightMax) < Number(input.heightMin)) {
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


// Check URL is type of: http or https : // something.com / something.image format
    //if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/.test(input.image)) { // Does not check image extensions. (!? not allowed)