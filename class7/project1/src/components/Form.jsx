import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate= useNavigate();


const[loginData,setLoginData]=useState({
    username:"",
    password:""
});


    const handleChange=(e)=>{
       setLoginData((loginData)=>{
        return{...loginData,[e.target.name]:e.target.value}
       })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(loginData)
        navigate("./info",{state:loginData})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
            <input type="text" placeholder='username' 
            value={loginData.username}
            onChange={handleChange}
                name='username'
            
            />
            
            <input type="password" placeholder='password' 
            value={loginData.password}
            onChange={handleChange}
             name='password'
            />
              <input type="submit" 
            />
        
      </form>

    </div>
  )
}

export default Form
