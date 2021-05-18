import React from 'react'
import './CheckField.css'

export default function CheckField({name, id, label, onChange}) {
    return (
        <div className="form__check-field">
            <input onChange={onChange} type="checkbox" name={name} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
