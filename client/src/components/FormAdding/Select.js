import React from 'react';
import Select from 'react-select';
import '../../css/index.css';

export default function CustomSelect({options, value, onChange}) {
return (
<Select options={options} value={value} onChange={onChange} className="S"
placeholder="Select temperaments"
isMulti
/*isDisabled={false}
isLoading={false}
isClearable={false}
isRlt={false}
closeMenuOnSelect={false} */
/>
)
}