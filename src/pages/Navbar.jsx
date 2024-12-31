import React from 'react'
import { Link} from 'react-router-dom'
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
    
const user=useSelector((state)=>state.userinfo.Users)
  return (
   <nav>
    <h1>Grony</h1>
    <ul>
    <Link to="/">Login</Link>

     
    
     <Link to="/Users">Home</Link>
     <Link to="/About">Settings</Link>
     <Link to="/Contact">Logout</Link>
     
    </ul>
   </nav>
  )
}

export default Navbar