import React, { useState } from 'react'
import './Login.css'
import FFRLogo from '../../Assets/images/FFRLogo.png'


const Login = () => {

    const [user, setUser] = useState({});

    const changeHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const login = async()=>{
        let response;

        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user),
        }).then((res)=>res.json()).then((data)=>response=data)

        if(response.success){
            alert("Logged in");
            localStorage.setItem("auth-token",response.token);
            window.location.replace('/')
        }else{
            alert(response.errors);
        }
    }

  return (
    <div className='login-page'>
        <div className="login-wrapper">
            <div className="login-welcome">
                <h1>Furry Friends Refuge</h1>
                <img src={FFRLogo} alt="" />
            </div>
            <div className="login-form">
                <div className='login-headline'>
                    <h2>Login</h2>
                    <p>Don't have an account? <a href="/signup">Signup</a></p>
                </div>
                <div className='login-info'>
                    <label htmlFor="">Email </label>
                    <input name='user_email' onChange={changeHandler} type="text" />
                </div>
                <div className='login-info'>
                    <label htmlFor="">Password  </label>
                      <input name='user_password' onChange={changeHandler} type="password" />
                </div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
