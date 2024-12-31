import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    
const user=useSelector((state)=>state.userinfo.Users)
const dispatch=useDispatch();
const navigate=useNavigate();
const removeuser=()=>{
  dispatch(deleteUser)
  navigate("/")
}
  return (
   <nav>
    <h1>Grony</h1>
    <ul>
      {!user &&(
    <Link to="/">Login</Link>
      )}

     {user &&(
    <>
     <Link to="/Users">Home</Link>
     <Link to="/About">Settings</Link>
     <Link to="/Contact" onClick={removeuser}>Logout</Link>
     </>
     )}
     
    </ul>
   </nav>
  )
}

export default Navbar