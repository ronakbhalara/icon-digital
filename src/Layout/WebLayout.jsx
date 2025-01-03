import React, { Fragment } from 'react'
import Header from '../Component/Common/Header'
import Footer from '../Component/Common/Footer'
import Offer from '../Component/Common/Offer'

const WebLayout = ({ children }) => {
  return (
    <Fragment>
      <Offer />
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default WebLayout