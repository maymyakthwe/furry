import React, { useState } from 'react'
import './Signup.css'
import FFRLogo from '../../Assets/images/FFRLogo.png'


const Signup = () => {

    const [user, setUser] = useState({});

    const changeHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const createUser = async()=>{
        let response;
        
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user),
        }).then((res)=>res.json()).then((data)=>{
            response=data;
        })

        if(response.success){
            localStorage.setItem('auth-token',response.token);
            alert("User Added");
            window.location.replace('/')
        }else{
            alert(response.errors);
        }
    }

  return (
      <div className='signup-page'>
          <div className="signup-wrapper">
              <div className="signup-welcome">
                  <h1>Furry Friends Refuge</h1>
                  <img src={FFRLogo} alt="" />
              </div>
              <div className="signup-form">
                  <div className='signup-headline'>
                      <h2>Signup</h2>
                      <p>Already Have an account? <a href="/login">Login</a></p>
                  </div>
                  <div className='signup-info'>
                      <label htmlFor="">Username  </label>
                      <input onChange={changeHandler} type="text" name='user_name'/>
                  </div>
                  <div className='signup-info'>
                      <label htmlFor="">Email  </label>
                      <input onChange={changeHandler} type="text" name='user_email'/>
                  </div>
                  <div className='signup-info'>
                      <label htmlFor="">Password  </label>
                      <input onChange={changeHandler} type="password" name='user_password'/>
                  </div>
                  <button onClick={createUser}>Signup</button>
              </div>
          </div>
      </div>
  )
}

export default Signup
