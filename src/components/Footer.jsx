import React from 'react'
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import '../styles/Footer.scss'

export default function Footer() {

  const topFunction= ()=> {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
        <footer>
          <div>
            <div className='upper-section'>
              <div className="worktime">
                <h1>Work Time</h1>
                <div className="location">
                  <p>Level 13, 2 Elizabeth St,
                    Melbourne, Victoria 3000,
                    Australia
                  </p>
                </div>
                <div className="timing">
                  <div>
                    <p>Monday - Friday</p>
                    <p>09:00 AM - 06:00 PM</p>
                  </div>
                  <div>
                    <p>Saturday</p>
                    <p>10:00 AM - 02:00 PM</p>
                  </div>
                </div>
                <div className="icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaPinterestP />
                </div>
              </div>
              <div className="navigaton">
                <h1>Navigation</h1>
                <div>
                  <a href="">Home</a>
                  <a href="">Details</a>
                  <a href="">Offer</a>
                  <a href="">About Us</a>
                  <a href="">FAQ</a>
                  <a href="">Contact</a>
                </div>
              </div>
              <div className="download-app">
                <h1>Download App</h1>
                <div>
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-footer-pic1.svg" alt="" />
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-footer-pic2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className='lower-section'>
              <div>
                <FaRegCopyright size={20}/>
                <p> 2024 Betheme by <span>Muffin group</span>| All Rights Reserved </p>
              </div>
              <div className='to-top-btn' onClick={topFunction}>
                <BiArrowToTop size={30}/>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
