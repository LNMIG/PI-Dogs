import React from 'react';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Addnewbreed from './AddBreedButton.js';
import Findbreed from './FindBreedByName.js';
import Getall from './GetAllBreeds.js';
import SortByNames  from './SortBreedName.js';
import SortByWeight  from './SortBreedWeight.js';
import FilterByBreeds  from './FilterBreeds.js';
import FilterByTemperaments  from './FilterBreeds.js';
import '../../css/index.css';

export default function Menu({options, placeholders, breeds, className, handleFindBreed}) {
    return (
        <div className={className}>
            <Getall className={["FindAll", "btnAll"]} placeholder={"GET ALL BREEDS!"} handleFindBreed={handleFindBreed}/>
            <Findbreed className={["FindBreed", "input", "btnGO"]} placeholder={"SEARCH BY NAME!"} handleFindBreed={handleFindBreed}/>
            <FilterByBreeds isMulti={false} options={options[0]} placeholder={placeholders[0]} className={["SortTestGral", "divcontainer", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
            <SortByNames isMulti={false} options={options[1]} placeholder={placeholders[1]} currentBreeds={breeds} className={["SortTestGral", "divcontainer", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
            <SortByWeight isMulti={false} options={options[2]} placeholder={placeholders[2]} currentBreeds={breeds} className={["SortTestGral", "divcontainer", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
            <FilterByTemperaments isMulti={false} options={options[3]} placeholder={placeholders[3]} className={["SortTestGral", "divcontainer", "select", "btnGO"]} handleFindBreed={handleFindBreed}/>
            <Addnewbreed className={["Addbreed", "btn", "btn-link"]} innerText={"ADD YOUR OWN BREED!"} adress={"/dog"}/>
            <Backhomebutton innerText={"LANDING PAGE"} adress={"/"}/>
        </div>
    )
};