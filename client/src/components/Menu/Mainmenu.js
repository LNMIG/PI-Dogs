import React from 'react';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Addnewbreed from './AddBreedButton.js';
import Findbreed from './FindBreedByName.js';
import Getall from './GetAllBreeds.js';
// import Existing from './FilterBreeds.js';
// import Created from './FilterBreeds.js';
import SortNames from './SortBreeds.js';
import SortBreeds from './FilterBreeds.js';
import '../../css/index.css';

export default function Menu({options, placeholders, breeds, className, handleFindBreed}) {
    return (
        <div className={className}>
        <Getall className={["FindAll", "btnAll"]} placeholder={"GET ALL BREEDS!"} handleFindBreed={handleFindBreed}/>
        <Findbreed className={["FindBreed", "input", "btnGO"]} placeholder={"SEARCH BY NAME!"} handleFindBreed={handleFindBreed}/>
        <SortBreeds options={options[0]} placeholder={placeholders[0]} currentBreeds={breeds} className={["SearchGral", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
        <SortNames options={options[1]} placeholder={placeholders[1]} currentBreeds={breeds} className={["SearchGral", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
        <Addnewbreed className={["Addbreed", "btn", "btn-link"]} innerText={"ADD YOUR BREED!"} adress={"/dog"}/>
        <Backhomebutton innerText={"LANDING PAGE"} adress={"/"}/>
        </div>
    )
};