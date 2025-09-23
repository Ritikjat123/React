import React, { useState } from 'react'

function Form() {
    const[submitData,setSubmitData]=useState()
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
 const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

 }
 const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmitData(formData)
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        />
        <input type="email" 
         name="email"
        value={formData.email}
        onChange={handleChange}
        />
        <input type="password"
         name="password"
        value={formData.password}
        onChange={handleChange}
        
        />
        <button type='submit'>submit</button>
      </form>
      <div>
        {
            submitData && (
                <div>
                    <p>name:{submitData.name}</p>
                    <p>name:{submitData.email}</p>
                    <p>name:{submitData.password}</p>
                </div>
           
           
            )
        }
      </div>
    </div>
  )
}

export default Form
