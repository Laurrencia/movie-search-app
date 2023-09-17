import React from 'react';
import poster from '../images/poster.png';
import logo from '../images/tv.png';
import menu from '../images/menu-alt-4-1.svg';
import {FaSearch} from 'react-icons/fa';
import ratecard from '../images/imdb.png';
import posterfruit from '../images/fruit.png';
import playBtn from '../images/play.png';




function Header() {
  
  return (
    <div style={{backgroundImage: `url(${poster})`}} className='header-fluid'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='tvimg' className='tv' width="20%" height="20%"/>
          <h5 className='logoName'>Moviebox</h5>
        </div>
        <div className='searchBar'>
          <input 
            type='text'
            placeholder='What do you want to watch?'
            className='input'
          />
          <FaSearch className='search-logo'/>  
        </div>
        <div className='menu'>
          <span className='signIn'>Sign In</span>
          <img src={menu} alt='menu-img' className='menuBtn' width="30%" height="30%"/>

        </div>

      </div>
      <div className='posterDetails '>
          <h1>
            John Wick 3:<br></br> Parabellum
          </h1>
          <div className='posterRate'>
            <div className='posterRating'>
              <img src={ratecard} alt="banner-rate" width='30px'/>
              <span> 86.0/100</span>
            </div>
            <div className='posterRating'>
              <img src={posterfruit} alt='posterfruit'width='15px'/>
              <span> 97%</span>
            </div>
          </div>
          <p className='posterOverview mt-1'>
            John Wick is on the run after killing a member of the <br></br>
            international assassins' guild, and with a $14million price tag on<br></br>
            his head, he is the target of hit men and women everywhere. 
          </p>
          <button className='btn btn-dark posterBtn'>
            <img src={playBtn} alt='playbtn' className='poster-play-Btn' width='15px' height='15px'/>
             <i className='posterplay mt-2'>Watch trailer</i>
          </button>
          
      </div>
    </div>
      
    
  )
}

export default Header;