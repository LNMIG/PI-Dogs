import '../../css/index.css';

export default function FormSelect({options, value, placeholder, onChange}) {
    return (
        <div className="Formselect">
            <span className="label">
                Temperaments
            (select as wished)
            </span>
        <select multiple={true} name={placeholder} value={value.length>0 ? value : placeholder} onChange={()=>{}} className="selectbox">
            {options.map(el => <option key={el.value} value={el.value} onClick={onChange}>{el.label}</option>)}
        </select>
        </div>
    )
};