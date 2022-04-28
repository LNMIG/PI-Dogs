import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Commondetails/SortSomething.js';

export default function FilterBreeds({options, placeholder, className, handleFindBreed}) {

    const allBreeds = useSelector(state => state.allBreeds);
    const [sort, setSort] = useState({sortSelected: null});
    let prev=[], result=[], mode="";

    const onChange = function (sortSelected) { setSort({ sortSelected: sortSelected.target.value }) };
    const handleSubmit = function (e) { 
        e.preventDefault();
        mode = sort.sortSelected===null ? 'API' : sort.sortSelected;
        if(mode==='API') { prev = allBreeds.filter(b => b.id <= 1000); setSort({sortSelected: null}) }
        else if (mode==='DB') { prev = allBreeds.filter(b => b.id > 1000); setSort({sortSelected: null}) }
        else { 
            prev = allBreeds.filter(b => { 
                return b.temperament ? b.temperament.toLowerCase().includes(mode.toLowerCase()) ? true : false : false   });
            setSort({sortSelected: null})
        }
        result = prev.length===0 ? 'Sorry, there is no breed matching your search' : prev;
        handleFindBreed(result);
    };
    
    return ( <Button options={options} placeholder={placeholder} value={sort.sortSelected}
                     onChange={onChange} handleSubmit={handleSubmit} className={className}/>
    )
}