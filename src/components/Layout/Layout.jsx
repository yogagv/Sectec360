import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routing from '../Routers/Routing'


const Layout = () => {
  return (
    <div>
        <Header />
        <Routing />
        <Footer />
    </div>
  )
}

export default Layout