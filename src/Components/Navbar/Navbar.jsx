import React from 'react'
import './Navbar.css'
import FFRLogo from '../../Assets/images/FFRLogo.png'

const Navbar = () => {

    //const [menu,setMenu] = useState("Services")

    return (
        <div className='navbar'>
            <div className='nav-wrapper'>
                <a href='/' className="nav-home">
                    <img className='nav-logo' src={FFRLogo} alt="" />
                    <p>Furry Friends Refuge</p>
                </a>
                <div className="nav-links">
                    <li><a href="/services">Services</a><hr /></li>
                    <li><a href="/help">Help</a><hr /></li>
                    <li><a href="/find">Find Your Pet</a><hr /></li>
                    <li><a href="/about">About Us</a><hr /></li>
                    <li><a href="/profile">Profile</a><hr /></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
