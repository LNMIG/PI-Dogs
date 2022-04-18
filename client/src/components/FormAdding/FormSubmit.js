import React from 'react';
import '../../css/index.css';

export default function FormAdvice({errors, disableTest}) {
        return (
            <div className='send'>
                <input className={Object.keys(errors).length ? "notactive": "active"} type="submit" value="SUBMIT" disabled={disableTest()} />
            </div>
        )
}