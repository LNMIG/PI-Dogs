import React from 'react';

export default function DoSomethingButton({handleSubmit, className, placeholder}) {
return (
    <form onSubmit={(e)=> handleSubmit(e)}>
        <div className={className[0]} >
          <input className={className[1]} type="submit" value={placeholder}></input>
        </div>
    </form>
)
};