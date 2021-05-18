import React, { useEffect, useState } from "react";
import createUser, { getRegistrationLabels } from "../../service/service";
import { validate } from "../../Validation/Validation";
import Button from "./components/Button/Button";
import CheckField from "./components/CheckField/CheckField";
import InputField from "./components/InputField/InputField";
import PasswordField from "./components/PasswordField/PasswordField";
import "./RegistrationForm.css";

export default function RegistrationForm() {

    const [displayError, setDisplayError] = useState(false)
    const [regLabels, setRegLabels] = useState({})
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [newsletter, setNewsletter] = useState()
    const [terms, setTerms] = useState('')
    const [privacy, setPrivacy] = useState('')

    useEffect(() => {
       async  function fetchData(){
            let res = await getRegistrationLabels()
            setRegLabels(res)
        }
       fetchData()
    }, [])
    // console.log(regLabels)

function handleChange(e){
 const id = e.target.id
 const el = e.target

    switch(id){
        case 'firstName': if(validate(el.value, 'text')){
                            setfirstName(el.value);
                            setRegLabels(prevState=>({...prevState, IsRequired:true}))
                            } else{setRegLabels(prevState=>({...prevState,IsRequired:false}))} break;
        case 'lastName':  if(validate(el.value, 'text')){
                            setLastName(el.value);
                            setRegLabels(prevState=>({...prevState,IsRequired:true}))
                            } else{setRegLabels(prevState=>({...prevState,IsRequired:false}))} break;
        case 'email':     if(validate(el.value, 'text')){
                            setEmail(el.value);
                            setRegLabels(prevState=>({...prevState,IsRequired:true}))
                            } else{setRegLabels(prevState=>({...prevState,IsRequired:false}))} break;
        case 'pass': setPass(el.value); break;
        case 'newsletter': setNewsletter(el.checked); break;
        case 'terms': setTerms(el.checked); break;
        case 'privacy': setPrivacy(el.checked); break;
            default: return
    }
 
}

function handleSubmit(){
    setDisplayError(true)
    let y = setTimeout(()=>setDisplayError(false), 2000);
    createUser({
        email: email,
        firstName: firstName,
        lastName: lastName,
        newsletter: newsletter,
        password: pass,
        privacyPolicy: privacy,
        terms: terms,
        salutation: 'Ok'
    })
    // return clearTimeout(time)
}

    return (
        <section className="form">
            <div className="form__wrapper">
                <h1 className="form__title">Registrierung</h1>
                <p className="form__subtitle">
                    Mit einem Konto können Sie Bestellungen effizienter
                    verfolgen und Artikel zurückgeben. Ausserdem können Sie
                    mehrere Adressen speichern und den Bezahlvorgang
                    beschleunigen.
                </p>
                <InputField type="text" title="Vorname" id="firstName" onChange={handleChange} display={displayError} regLabels={regLabels?.FirstName}/>
                <InputField type="text" title="Nachname" id="lastName" onChange={handleChange} display={displayError} regLabels={regLabels?.LastName}/>
                <InputField type="email" title="E-mail" id="email" onChange={handleChange} display={displayError} regLabels={regLabels?.Email}/>
                <PasswordField onChange={handleChange}/>
                <CheckField onChange={handleChange} name="newsletter" id="newsletter" label="Ich möchte den kostenlosen Newsletter erhalten."/>
                <CheckField onChange={handleChange} name="terms" id="terms" label="Ich akzeptiere die AGB’s."/>
                <CheckField onChange={handleChange} name="privacy" id="privacy" label="Ich akzeptiere die AGB’s und die Datenschutzbestimmungen."/>
                <Button onSubmit={handleSubmit} title="Konto erstellen"/>
                <a className="form__link" href="www">Bereits ein Konto? Zur Anmeldung</a>
            </div>
        </section>
    );
}
