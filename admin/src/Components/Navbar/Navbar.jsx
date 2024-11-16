import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <img src={logo}  alt="" className='nav-logo' />
            <div className='label-container'>
                <p className='image-label'>UrbanFashion</p>
                <p className='admin-label'>ADMIN PANEL</p>
            </div>
        </div>
        <AccountCircleIcon style={{ fontSize: '48px', marginRight: '-1000px' }} />
        <ArrowDropDownIcon style={{ fontSize: '30px', marginRight: '50px'}}/>
    </div>
  )
}

export default Navbar
