import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Privaterouter = () => {
    const user=useSelector((state)=>state.userinfo.Users)
    if(!user){
        return <Navigate to="/"></Navigate>
    }
  return (
    <Outlet/>
  )
}

export default Privaterouter

