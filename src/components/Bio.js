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
        <div class="image-wrapper">
          <div
            className="bio__image"
            style={{
              backgroundImage: `url(${data.dataJson.profilePic})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
        </div>
        </div>
        <div className="bio__text" dangerouslySetInnerHTML={{ __html: data.dataJson.bio }} />
      </div>
    </Wrapper>
  )
}

export default Bio
