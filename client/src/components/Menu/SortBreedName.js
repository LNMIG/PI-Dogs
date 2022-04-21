import React, {useState} from 'react';
import Button from '../Commondetails/SearchSomethingButton.js';

export default function SortBreedName({options, placeholder, currentBreeds, className, handleFindBreed}) {

    let result=[], mode="";
    const [sort, setSort] = useState({sortSelected: null});
    const onChange = function (sortSelected) { setSort({ sortSelected }) };
    const handleSubmit = function (e) { 
        e.preventDefault();
        mode = sort.sortSelected===null ? 'A-Z' : sort.sortSelected.value;
        if(mode==='A-Z') { currentBreeds.sort((a,b) => {if (b.name > a.name) return -1; return 0}); setSort({sortSelected: null}) }
        else if (mode==='Z-A') { currentBreeds.sort((a,b) => {if (a.name > b.name) return -1; return 0}); setSort({sortSelected: null}) }
        else { currentBreeds=[];}
        result = currentBreeds.length===0 ? 'Sorry, request denied' : currentBreeds;
        handleFindBreed(result);
    };
    return (
        <Button options={options} placeholder={placeholder} value={sort.sortSelected} onChange={onChange} handleSubmit={handleSubmit} className={className}/>
    )
}