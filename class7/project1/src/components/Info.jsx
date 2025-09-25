import React from 'react'
import { useLocation } from 'react-router-dom'

function Info() {
    const location=useLocation()
    const {username,password}=location.state || {}
  return (
    <div>
      <p>{username}</p>
       <p>{password}</p>
    </div>
  )
}

export default Info
