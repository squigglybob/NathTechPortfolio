import React from 'react'
import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Wrapper>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Wrapper>
      </Layout>
    )
  }
}

export default NotFoundPage
