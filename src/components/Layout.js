import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { title, subTitle, children } = this.props

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
