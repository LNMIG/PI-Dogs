import React from 'react';
import Select from 'react-select';

export default function FormSelect({options, value, onChange}) {
    return (
        <Select options={options} value={value} onChange={onChange} className="S"
        placeholder="Select temperaments"
        isMulti
        />
    )
};