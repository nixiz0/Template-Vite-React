import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css'


function Navbar() {
  return (
    <>
      <nav>
        <h3>Navbar</h3>
        <ul>
          <Link smooth to="/"><li>home</li></Link>
          <Link smooth to="/contact"><li>contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar