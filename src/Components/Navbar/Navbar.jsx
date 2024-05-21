/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import FFRLogo from '../../Assets/images/FFRLogo.png'
import profile from '../../Assets/images/profile.png'

const Navbar = () => {

    const [user,setUser] = useState({});

    const fetchInfo = async () => {
    const userId = localStorage.getItem("auth-token");
    if(userId){
        await fetch(`http://localhost:4000/user/${userId}`)
            .then((res) => res.json()
                .then((data) => setUser(data)));
    }}

    useEffect(() => {
        fetchInfo();
        console.log(user)
    }, [])


    const logout = ()=>{
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    }

   
    return (
        <div className='navbar'>
            <div className='nav-wrapper'>
                <a href='/' className="nav-home">
                    <img className='nav-logo' src={FFRLogo} alt="" />
                    <p>Furry Friends Refuge</p>
                </a>
                <div className="nav-links">
                    <a href="/services">Services<hr /></a>
                    <a href="/find">Find Your Pet <hr /></a>
                    <a href="/about">About Us <hr /></a>
                    {localStorage.getItem('auth-token')?
                        <button className='dropdown'><i className="fa-regular fa-user"></i><span className='nav-name'>{user.user_name}</span>
                            <div className='dropdown-content'>
                                <div className="profile-heading">
                                    <img src={user.user_avatar ? user.user_avatar : profile} alt="" />
                                    <div className="profile-heading-text">
                                        <div className='profile-name'><a href="/user">{user.user_name}</a></div>
                                        <div className='profile-email'>{user.user_email}</div>
                                    </div>
                                </div>
                                <div className="profile-section">
                                    <div className="profile-link"><a href="/user">My Adoptions</a></div>
                                    <div className="profile-link"><a href="/user">My Donations</a></div>
                                    <div className="profile-link"><a href="/user">Notifications</a></div>
                                    <div className="profile-link"><a href="/user">Edit Profile</a></div>
                                </div>
                                <div className="profile-logout"><button onClick={logout}>Logout</button></div>
                            </div>
                        </button> :
                        <>
                            <a href="/login">Login <hr /></a>
                            <a href="/signup">Signup <hr /></a>
                        </>}
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
