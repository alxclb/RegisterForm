import React from 'react'
import './PasswordInstructions.css'

export default function PasswordInstructions() {
    return (
        <div className="form__password-instructions">
            <p>Für ein starkes Passwort, beachte diese Vorgaben:</p>
            <p>- Mindestens 8 Zeichen</p>
            <p>- Klein- und Grossbuchstaben</p>
            <p>- Mindestens eine Zahl</p>
            <p>- Mindestens ein Sonderzeichen</p>
        </div>
    )
}
