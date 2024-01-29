import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const App=()=>{
  const [login,setLogin]=useState({email:"",password:""})
 
  
  const Check=async()=>{
    const res = await axios.get('https://notesapp-roks.onrender.com/user/login',login)
     console.log(res)
    // console.log(login)
  }
  return(
    <>
    <div id="container">
       <h1>Login Page</h1>
       <label>Email</label><br/>
       <input type="text" placeholder='Enter your email'value={login.email}
        onChange={(e)=>setLogin({...login,email : e.target.value})}/>
       <br/> <br/>

       <label>Password</label><br/>
      <input type="password" placeholder='Enter your password'
      value={login.password}
      onChange={(e)=>setLogin({...login,password : e.target.value})}/>
      <br/> <br/>
      <button onClick={Check}>Login</button>
    </div>
    
    </>
  )
}

export default App;
