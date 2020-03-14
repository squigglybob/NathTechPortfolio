import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, subTitle, children } = this.props

    return (
      <div

/*         style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }} */
      >
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
