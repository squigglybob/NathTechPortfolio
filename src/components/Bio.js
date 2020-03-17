import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Wrapper from "./Wrapper";
import './Bio.scss'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
class Bio extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query BioDataQuery {
            dataJson {
              name
              profilePic
              bio
            }
          }
        `}
        render={data => (
          <Wrapper>
            <div className="bio">
              <img
                className="bio__image"
                src={data.dataJson.profilePic}
                alt={data.dataJson.name}
              />
              <div className="bio__text" dangerouslySetInnerHTML={{ __html: lorem }} />
            </div>
          </Wrapper>
        )}
      />
    )
  }
}

export default Bio
