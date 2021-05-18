import React from 'react'
import './Button.css';

export default function Button({title, onSubmit}) {
    return (
        <div className="form__button">
            <button onClick={onSubmit} type="button">{title}</button>
        </div>
    )
}
