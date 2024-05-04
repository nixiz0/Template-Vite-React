import React from 'react'
import { Helmet } from 'react-helmet'
import '../css-style/home.css'

import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'


function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Navbar />

      <div>Home</div>

      <Footer />
    </>
  )
}

export default Home