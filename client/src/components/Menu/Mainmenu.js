import React from 'react';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Addnewbreed from '../Commondetails/AddBreedButton.js';
import Findbreed from '../Commondetails/FindBreedByName.js';
import Getall from '../Commondetails/GetAllBreeds.js';
import '../../css/index.css';

export default function Menu({className, handleFindBreed}) {
    return (
        <div className={className}>
        <Getall placeholder={"GET ALL AVAILABLE BREEDS!"} handleFindBreed={handleFindBreed}/>
        <Findbreed placeholder={"SEARCH BY NAME!"} handleFindBreed={handleFindBreed}/>
        <Addnewbreed innerText={"ADD YOUR BREED!"} adress={"/dog"}/>
        <Existing placeholder={"SELECT ALL EXISTING BREEDS"}/>
        <Created placeholder={"SELECT ALL NEWLY CREATED BREEDS"}/>
        <SortAZname placeholder={"SORT BY NAME (A-Z)"}/>
        <SortZAname placeholder={"SORT BY NAME (Z-A)"}/>
        <SortAZweight placeholder={"SORT BY WEIGHT (MIN-MAX)"}/>
        <SortZAweight placeholder={"SORT BY WEIGHT (MAX-MIN)"}/>
        <Backhomebutton innerText={"LANDING PAGE"} adress={"/"}/>
        </div>
    )
};