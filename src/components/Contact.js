import React, {useState} from 'react'
import { send } from 'emailjs-com';
import '../styles/contact.css'
import loading from '../images/loading.gif'
import '../styles/app.css';

export default function Contact() {
    const [sent,setSent] = useState("")
    const [form, setForm] = useState({
        email: "",
        topic: "",
        message: ""
    });

    function validateForm(e) {
        const {name,value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function showValues(event) {
        event.preventDefault();
        setSent("Wysyłanie");
        send(
            'service_t64r7if',
            'template_ld7gwbg',
            form,
            'T-qXIIUjBmz3CCCST'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSent("Wysłano wiadomość!");
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setSent("Nie udało się wysłać wiadomości");
            });
    }

    const loadingcircle = <img src={loading} className="aboutme--loading"></img>;

    return (
        <div className="contact--container">
            <p className="aboutme--title">Skontaktuj się ze mną</p>
            <form className="contact--form" onSubmit={showValues}>
                <label>
                    <span>Email:</span>
                    <input type="email" className="contact--input" name="email" value={form.email} placeholder="Podaj swój email" onChange={validateForm} />
                </label>
                <label>
                    <span>Temat:</span>
                    <input type="text" className="contact--input" name="topic" value={form.topic} placeholder="Podaj temat" onChange={validateForm} />
                </label>
                <label>
                    <span>Wiadomość:</span>
                    <textarea className="contact--message" name="message" value={form.message} placeholder="Wiadomość" onChange={validateForm}></textarea>
                </label>
                <input type="submit" className="contact--submit" value="Wyślij" />
            </form>
            <div>
                {sent === "Wysyłanie" ? loadingcircle : ""}
            </div>
            <span>{sent}</span>

        </div>
    )
}