import React, { useState } from 'react'

import Input from 'components/Input'

import 'assets/styles/components/ContactForm.scss'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const onChange = (name, value) => {
        setFormData({ 
            ...formData,
            [name]: value,
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(formData);
        // send email to info@nathtech.dev
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
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
                <button
                    className="form-group__submit button"
                    type="input"
                    disabled={loading}
                >
                    Send
                </button>
            </div>
        </form>
    )
}
