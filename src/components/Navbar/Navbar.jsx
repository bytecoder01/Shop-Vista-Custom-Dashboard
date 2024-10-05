// Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import { NavbarData } from '../Data/Data';
import { getIcon } from '../Data/Data'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import img from './../../images/img.png'
function Navbar() {
    const [Current, SetCurrent] = useState(0)
    return (
        <div className="navbar">
            <div className="logo">
                <img className='main-img' src={img} alt="" />
              
            </div>
            <div className="list">
                {NavbarData.map((item, index) => (
                    <div className={Current===index?'list-item selected': 'list-item'} key={index} 
                    onClick={ ()=> SetCurrent(index)}>
                        {getIcon(item.icon)} {/* Use getIcon function here */}
                        <span className='title-home'>{item.heading}</span>
                    </div>
                ))}
                <div className="list-item">
                <FontAwesomeIcon icon={faSignOut} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

