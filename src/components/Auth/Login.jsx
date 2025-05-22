import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const[email ,setEmail] = useState('')
  const[password ,setPassword] = useState('')
  
  const sumbitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email , password)
    console.log("email is " ,  email);
    console.log("password is " ,  password);
    setEmail ('')
    setPassword ('')
    
  }
  return (

    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 roundedxl border-emerald-600 p-20' >

        <form  onSubmit={(e) =>{
          sumbitHandler(e)
        }}
        className='flex flex-col items-center justify-center '>
        <input 
        value={email}
        onChange={(e) =>{
          setEmail(e.target.value);
          
        }}
        required
  className=" outline-none bg-transparent 
   border-2 border-emerald-600 text-xl py-3 px-5 rounded-full "
  type="email" 
  placeholder="Enter your Email"
/>
<input 
value={password}
onChange={(e) =>{
  setPassword(e.target.value);
  
}}
required
 className=" outline-none bg-transparent 
   border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 "
  type="password" 
  placeholder="Enter your Password"

/>        
<button  className=" outline-none   text-white font-semibold text-lg py-2 px-8
      border-2 bg-emerald-600 border-emerald-600  w-full rounded-full mt-5
    placeholder:text-white ">Log in</button> 


        </form>
        
          
      
      </div>
      
    </div>
  )
}

export default Login
