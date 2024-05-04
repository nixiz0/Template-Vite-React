import React from 'react'
import { Helmet } from 'react-helmet'
import '../css-style/contact.css'

import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'


function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Navbar />

      <div>Contact</div>

      <Footer />
    </>
  )
}

export default Contact