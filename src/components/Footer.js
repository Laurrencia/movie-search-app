import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter,FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className='container ms-auto footer'>
        <div className='iconHold'>
            <FaFacebookSquare className='footerIcon'/>
            <FaInstagram className='footerIcon'/>
            <FaTwitter className='footerIcon'/>
            <FaYoutube className='footerIcon'/>
        </div>
        <div className='footerLink'>
           <small>Condition of Use</small>
           <small>Privacy Policy</small>
           <small>Press Room</small>
        </div>
        <div className='copyRight'>
            <span>&copy; 2021 MovieBox by Laurrencia  Joseph</span>
        </div>
    </div>
  )
}

export default Footer