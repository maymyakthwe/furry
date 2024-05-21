/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './User.css'
import profile from '../../Assets/images/profile.png'


const User = () => {

  const [user, setUser] = useState({});
  const [sideMenu,setSideMenu] = useState("noti");

  const fetchInfo = async () => {
    const userId = localStorage.getItem("auth-token");
    if (userId) {
      await fetch(`http://localhost:4000/user/${userId}`)
        .then((res) => res.json()
          .then((data) => setUser(data)));
    }
  }
  
  useEffect(() => {
    fetchInfo();
    console.log(user)
  }, [])

  const logout = () => {
    localStorage.removeItem('auth-token');
    window.location.replace('/');
  }

  return (
    <div className='user'>
      <div class="sidebar">
        <div className="sidebar-img">
          <img src={user.user_avatar ? user.user_avatar : profile} alt="" />
        </div>
        <div className='sidebar-text'>
          <div >{user.user_name}</div>
          <div >{user.user_email}</div>
        </div>
        <div onClick={() => setSideMenu('noti')} className={sideMenu === "noti" ? "active sideMenu" :"sideMenu"}>Notifications</div>
        <div onClick={() => setSideMenu('adopt')} className={sideMenu === "adopt" ? "active sideMenu" : "sideMenu"}>My Adoption</div>
        <div onClick={() => setSideMenu('donate')} className={sideMenu === "donate" ? "active sideMenu" : "sideMenu"}>My Donation</div>
        <div onClick={() => setSideMenu('edit')} className={sideMenu === "edit" ? "active sideMenu" : "sideMenu"}>Edit Profile</div>
        <button className='sideMenu' onClick={logout}>Logout</button>
      </div>

      <div class="content">
        ..
      </div>
    </div>
  )
}

export default User
