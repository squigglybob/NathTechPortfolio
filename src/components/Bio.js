import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Wrapper from "./Wrapper";
import 'assets/styles/components/Bio.scss'

function Bio() {
  const data = useStaticQuery(graphql`
  query BioDataQuery {
    dataJson {
      name
      profilePic
      bio
    }
  }
`)

  return (
    <Wrapper id="bio" >
    <div className="bio">
      <img
        className="bio__image"
        src={data.dataJson.profilePic}
        alt={data.dataJson.name}
      />
      <div className="bio__text" dangerouslySetInnerHTML={{ __html: data.dataJson.bio }} />
    </div>
  </Wrapper>
  )
}

export default Bio
