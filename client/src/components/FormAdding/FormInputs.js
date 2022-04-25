import '../../css/index.css';

export default function FormInputs({innerText, errors, type, name, input, handleInputChange, placeholder, label}) {
return (
        <div className='divtag'>
            <label className='L'>{innerText}</label>
            <input className={errors ? 'danger' : 'R'} type={type} name={name} value={input} onChange={handleInputChange} placeholder={placeholder}></input>
            {errors && (<p className='danger'>{errors}</p>)}
            <label className='simbol'>{label}</label>
        </div>
        )
};