import React, {useState} from 'react';
import Button from '../Commondetails/SearchSomethingButton.js';

export default function SortBreedWeight({options, placeholder, currentBreeds, className, handleFindBreed}) {

    let result=[], mode="";
    const [sort, setSort] = useState({sortSelected: null});
    const onChange = function (sortSelected) { setSort({ sortSelected }) };
    const handleSubmit = function (e) { 
        e.preventDefault();
        mode = sort.sortSelected===null ? 'MIN-MAX' : sort.sortSelected.value;
        if(mode==='MIN-MAX') { currentBreeds.sort((a,b) => {
            let next = parseInt(b.weight.split(' ')[0]);
            let prev = parseInt(a.weight.split(' ')[0]);
            if (next > prev) return -1;
            return 0 });
            setSort({sortSelected: null}) 
        }
        else if (mode==='MAX-MIN') { currentBreeds.sort((a,b) => {
            let next = parseInt(b.weight.split(' ')[0]);
            let prev = parseInt(a.weight.split(' ')[0]);
            if (prev > next) return -1;
            return 0});
            setSort({sortSelected: null}) 
        }
        else { currentBreeds=[];}
        result = currentBreeds.length===0 ? 'Sorry, request denied' : currentBreeds;
        handleFindBreed(result);
    };
    return (
        <Button options={options} placeholder={placeholder} value={sort.sortSelected} onChange={onChange} handleSubmit={handleSubmit} className={className}/>
    )
}