export default function SortTest({isMulti, options, placeholder, value, onChange, handleSubmit, className}) {

    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div className={className[0]} >
                <div className={className[1]}>
                <select className={className[2]} multiple={isMulti} name={placeholder} value={value ? value : placeholder}onChange={onChange}>
                    <option value={placeholder}>{placeholder}</option>
                    {options.map(el => <option key={el.value} value={el.value}>{el.label}</option>)}
                </select>
                </div>
                <input className={className[3]} type="submit" value="GO"></input>
            </div>
        </form>
    )
}