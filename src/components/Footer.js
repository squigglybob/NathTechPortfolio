import React from 'react'

import Wrapper from 'components/Wrapper'
import ContactForm from "components/ContactForm";
import SocialLinks from "components/SocialLinks"

import useSiteMetaData from 'hooks/useSiteMetaData'

import "assets/styles/components/Footer.scss"

function Footer() {

    const { siteUrl, title } = useSiteMetaData()

    return (
        <Wrapper className="footer-wrapper" id="contact">
            <div className="footer">
                <ContactForm />
                <SocialLinks />
                <div>Copyright © 2020 <a href={siteUrl}>{title}</a></div>
            </div>
        </Wrapper>
    )
}

export default Footer