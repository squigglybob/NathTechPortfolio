import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetaData() {

    const { site } =  useStaticQuery(graphql`
        query siteDataQuery { 
        site {
            siteMetadata {
            title
            description
            siteUrl
            }
        }
    }`)
    
    return site.siteMetadata
}