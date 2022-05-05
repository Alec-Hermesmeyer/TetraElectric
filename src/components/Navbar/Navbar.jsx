import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
            <div className="nav-left">
                <img src={logo} alt="logo" className='logo-img' />
                <span className="logo-name">Tetra Electric</span>
            </div>
            <div className="nav-center">
                <ul className="menu">
                    <li className="menu-items">Home</li>
                    <li className="menu-items">Services</li>
                    <li className="menu-items">About Us</li>
                    <li className="menu-items">Contact Us</li>
                    <li className="menu-items">Blog</li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="icons">
                <LocalPhoneIcon />
                <FacebookIcon />
                <AssignmentIcon />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar