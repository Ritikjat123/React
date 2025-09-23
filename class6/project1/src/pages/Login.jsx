import React, { useState } from 'react'

function Login() {
  const [submitData, setSubmitData] = useState(null)
  const [loginData, setLoginData] = useState({
    fname: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitData(loginData)  // save current loginData
    console.log("Submitted Data:", loginData)
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="fname"
          placeholder="enter name"
          value={loginData.fname}
          onChange={handleChange}
        />
        
        <input 
          type="password" 
          name="password"
          placeholder="enter password"
          value={loginData.password}
          onChange={handleChange}
        />
         
        <button type="submit">login</button>
      </form>

      {submitData && (
        <div>
          <h3>Form Submitted:</h3>
          <p>Name: {submitData.fname}</p>
          <p>Password: {submitData.password}</p>
        </div>
      )}
    </div>
  )
}

export default Login
