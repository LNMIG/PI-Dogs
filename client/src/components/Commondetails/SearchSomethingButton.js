import React from 'react';
import Select from 'react-select';

export default function SearchSomethingButton({options, placeholder, value, onChange, handleSubmit, className}) {
    console.log(value)
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className={className[0]} >
                <span className={className[1]}>
                <Select options={options} value={value} onChange={onChange}  placeholder={placeholder}/>
                </span>
                <input className={className[2]} type="submit" value="GO"></input>
            </div>
        </form>
    )
}