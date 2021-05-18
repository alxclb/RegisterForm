import React from "react";
import './PasswordField.css'
import PasswordInstructions from "./PasswordInstructions/PasswordInstructions";

export default function PasswordField() {
    return (
        <div className="form__password-input-field">
            <input type="password" placeholder="Passwort" />
            <PasswordInstructions />
        </div>
    );
}
