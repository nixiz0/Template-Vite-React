import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './footer.css'


function Footer() {
  return (
    <>
      <footer>
        <h3>Footer</h3>
        <ul>
          <Link smooth to="/"><li>Lorem</li></Link>
          <Link smooth to="/"><li>Lorem</li></Link>
          <Link smooth to="/"><li>Lorem</li></Link>
        </ul>
      </footer>
    </>
  )
}

export default Footer