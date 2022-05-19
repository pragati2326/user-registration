import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
      <div>
      <nav>
        <ul>
          <li>
            <Link to='/user-reg'>User Registration</Link>
          </li>
        </ul>
      </nav>
      </div>
  )
}

export default Navbar
