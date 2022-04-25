
export default function DoSomethingInput({handleSubmit, handleInputChange, input, className, placeholder}) {
return (
    <form onSubmit={(e)=> handleSubmit(e)}>
        <div className={className[0]} >
            <input className={className[1]} type="text" name="breedName" value={input.breedName} onChange={handleInputChange} placeholder={placeholder}></input>
            <input className={className[2]} type="submit" value="GO"></input>
        </div>
    </form>
)
}