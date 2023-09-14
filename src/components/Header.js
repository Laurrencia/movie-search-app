import React from 'react';
import poster from '../images/poster.png';
import logo from '../images/tv.png';
import menu from '../images/menu-alt-4-1.svg';
import {FaSearch} from 'react-icons/fa';



function Header() {
  
  return (
    <div style={{backgroundImage: `url(${poster})`}} className='header-fluid'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='tvimg' className='tv' width="20px" height="20px"/>
          <h4 className='logoName'>Moviebox</h4>
        </div>
        <div className='search'>
          <input 
            type='text'
            placeholder='What do you want to watch?'
            className='input'
          />
          <FaSearch className='search-logo'/>  
        </div>
        <div className='menu'>
          <h4 className='signIn'>Sign In</h4>
          <img src={menu} alt='menu-img' className='menuBtn' width="20px" height="20px"/>

        </div>

      </div>
    </div>
      
    
  )
}

export default Header;