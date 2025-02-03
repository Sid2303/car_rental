import React from 'react'
import "../styles/Aboutus.scss"

export default function Aboutus() {
  return (
    <>
      <div className="hero-section">
        <div className='lhs'>
          <p>About Us</p>
          <h1><span>A massa in cursus</span> faucibus tincidunt eget neque, convallis at. Nunc at nisl.</h1>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
        </div>
        <div className='rhs'>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
        </div>
      </div>

      <div className="exp-section">
        <div>
          <div className="lhs">
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-pic1.webp" alt="" />
          </div>
          <div className="rhs">
            <h1><span>15 years</span> of experience</h1>
            <p>
              Lacus aliquet nunc aliquam praesent mattis leo ornare aliquet eget. Aliquet quis lectus quis posuere at quis. Ut sed pharetra
              eu est lobortis. Aenean ut risus, nisl cras est nec, risus. Egestas elit pretium ut porttitor suspendisse dolor nullam. 
              Eros tortor imperdiet bibendum id molestie. In quam quisque molestie leo sollicitudin.
            </p>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
              <h2>Customer friendly <span>company</span></h2>
            </div>
            <button>Book a car</button>
          </div>
        </div>
      </div>


      <div className="order-car">
        <div>
          <div className='order-top'>
            <h1>Order your car in <span>four easy steps</span></h1>
          </div>
          <div>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-num1.svg" alt="" className='num'/>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-icon1.svg" alt="" />
              <div>
                <h3>Date & Location</h3>
                <p>Mus et leo et ornare.</p>
              </div>
              
            </div>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-num2.svg" alt="" className='num'/>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-icon2.svg" alt="" />
              <div>
                <h3>Choose a Car</h3>
                <p>Eu varius at molestie id.</p>
              </div>
              
            </div>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-num3.svg" alt="" className='num'/>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-icon3.svg" alt="" />
              <div>
                <h3>Make a Booking</h3>
                <p>Donec turpis in ultrices.</p>
              </div>
              
            </div>
            <div>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-num4.svg" alt="" className='num'/>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-icon4.svg" alt="" />
              <div>
                <h3>Enjoy Your Ride!</h3>
                <p>Amet dui lacus ultrices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-cars">
        <div>
          <p>Our cars</p>
          <h1><span>Sed nullam leo</span> felis diam. Nullam ac lectus ut facilisi euismod a amet viverra.</h1>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
        </div>
      </div>

      <div className="get-order">
        <div>
            <div className='get-order-text'>
              <h2>Nunc faucibus <span>egestas dolor</span></h2>
              <h3>Bibendum eros tincidunt elit, dignissim duis non, nunc, convallis. Vitae adipiscing sit.</h3>
              <p>Lacus aliquet nunc aliquam praesent mattis leo ornare aliquet eget. Aliquet quis lectus quis posuere at quis. Ut sed pharetra eu est lobortis. Aenean ut risus, nisl cras est nec, risus.</p>
            </div>
          <div>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-pic2.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="download-mobile-app">
        <div>
          <div className='download-mobile-lhs'>
            <h1><span>Download</span> mobile app</h1>
            <p>Lacus aliquet nunc aliquam praesent mattis leo ornare aliquet eget. Aliquet quis lectus quis posuere at quis.</p>
            <div className='download-mobile-lhs-images'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic6.svg" alt="" />
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic7.svg" alt="" />
            </div>
          </div>
          <div className='download-mobile-rhs'>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-about-pic3.webp" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}
