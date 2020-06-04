import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import Input from 'components/Input'

import 'assets/styles/components/ContactForm.scss'

const INITIAL_FORM_DATA = {
    name: '',
    email: '',
    subject: '',
    message: '',
    recaptcha: null,
}

export default function ContactForm() {

    const formName = "contact"

    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const [loading, setLoading] = useState(false)

    const onChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(formData);
        // capture form data on netlify
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                alert("Success!")
                setFormData(INITIAL_FORM_DATA)
            })
            .catch(error => {
                console.log(error)
                alert("Error: Message not sent")
            });
    }

    return (
        <form className="contact-form" name={formName} onSubmit={sendEmail} data-netlify-recaptcha="true" data-netlify="true" data-netlify-honeypot="bot-field" >
            <input type="hidden" name="form-name" value={formName} />
            <input type="hidden" name="bot-field" />
            <div className="form-group">
                <Input
                    className={"form-group__text-input form-group__text-input--first"}
                    name="name"
                    value={formData.name}
                    onChange={(e) => onChange('name', e.target.value)}
                />
            </div>
            <div className="form-group">
                <Input
                    className={"form-group__text-input"}
                    name="email"
                    value={formData.email}
                    onChange={(e) => onChange('email', e.target.value)}
                />
            </div>
            <div className="form-group">
                <Input
                    className={"form-group__text-input"}
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => onChange('subject', e.target.value)}
                />
            </div>
            <div className="form-group">
                <Input
                    className={"form-group__text-input form-group__text-input--last"}
                    name="message"
                    multi={true}
                    value={formData.message}
                    onChange={(e) => onChange('message', e.target.value)}
                />
            </div>
            <div className="form-group">
                <ReCAPTCHA
                    sitekey={process.env.RECAPTCHA_SITE_KEY}
                    onChange={(value) => { onChange('recaptcha', value) }}
                    onExpired={() => setFormData({ ...formData, recaptcha: null })}
                />
                <button
                    className="form-group__submit button"
                    type="input"
                    disabled={loading || !formData.recaptcha}
                >
                    Send
                </button>
            </div>
        </form>
    )
}
