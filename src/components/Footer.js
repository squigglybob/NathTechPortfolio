import React from 'react'

import Wrapper from 'components/Wrapper'
import ContactForm from "components/ContactForm";
import SocialLinks from "components/SocialLinks"

import "assets/styles/components/Footer.scss"

function Footer() {  

    return (
        <Wrapper className="footer-wrapper" id="contact">
            <div className="footer">
                <ContactForm />
                <SocialLinks />
                <div>Copyright © 2020 <a href="https://nathtech.dev">NathTech</a></div>
            </div>
        </Wrapper>
    )
}

export default Footer