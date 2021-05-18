import React from 'react'
import './Message.css';


export default function Message({data, display }) {

    return (
        <div className="form__input__message" style={{display: display?'block':'none'}}>
            {!data?.isRequired?<p>{data?.IsRequiredError}</p>:null}
        </div>
    )
}

