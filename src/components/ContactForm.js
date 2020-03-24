import React from 'react'

import Input from 'components/Input'

import 'assets/styles/components/ContactForm.scss'

export default function ContactForm() {

    const sendEmail = (e) => {
        e.preventDefault()
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
                <Input className={"form-group__text-input form-group__text-input--first"} name="name" />
            </div>
            <div className="form-group">
                <Input className={"form-group__text-input"} name="email" />
            </div>
            <div className="form-group">
                <Input className={"form-group__text-input"} name="subject" />
            </div>
            <div className="form-group">
                <Input className={"form-group__text-input form-group__text-input--last"} name="message" multi={true} />
            </div>
            <div className="form-group">
                <button className="form-group__submit button" type="input">
                    Send
                </button>
            </div>
        </form>
    )
}
