import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
    

  return (
   <nav>
    <h1>Grony</h1>
    <ul>
     <Link to="/">Home</Link>
     <Link to="/Users">Users</Link>
     <Link to="/About">About</Link>
     <Link to="/Contact">Contact</Link>
    </ul>
   </nav>
  )
}

export default Navbar