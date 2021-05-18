import React from 'react'
import Message from '../Message/Message'
import './InputField.css'

export default function InputField({type, title, onChange, id, regLabels, display}) {
// console.log(display)
    return (
        <div className="form__input-field">
            <input type={type} placeholder={title} onChange={onChange} id={id}/>
            <Message data={regLabels} display={display}/>
        </div>
    )
}
