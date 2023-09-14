import React from 'react';
import poster from '../images/poster.png';
import logo from '../images/tv.png';


function Header() {
  
  return (
    <div style={{backgroundImage: `url(${poster})`}} className='header-fluid'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='tvimg' className='tv' width="100px" height="100px"/>
          <h4 className='logoName'>Moviebox</h4>

        </div>
        <div>
          <input type='search'/>
        </div>

      </div>
    </div>
      
    
  )
}

export default Header;