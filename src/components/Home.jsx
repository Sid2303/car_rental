import React from 'react';
import "../styles/Home.scss";

export default function Home() {
  return (
    <>
      <div className='home'>

        {/* <!-- HERO SECTION --> */}
        <div className="hero_section">
          <div className='book_section'>
            <div className='left_side'>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-logo.svg" alt="Car Rental" />
              <h1>Your Personal car rental</h1>
              <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic8.svg" alt="" />
            </div>
            
            <div className='right_side'>
              <div className="table">
                <h3>Book your car</h3>
                <ul>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Car Type
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Sedan</a></li>
                        <li><a className="dropdown-item" href="#">Pickup</a></li>
                        <li><a className="dropdown-item" href="#">Hatchback</a></li>
                        <li><a className="dropdown-item" href="#">Vagon</a></li>
                        <li><a className="dropdown-item" href="#">Minivan</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Place of rental
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">City 1</a></li>
                        <li><a className="dropdown-item" href="#">City 2</a></li>
                        <li><a className="dropdown-item" href="#">City 3</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Place of return
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <input type="date"  className='inputDate'/>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Rental hour
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <button>Book</button>
              </div>
            </div>
          </div>
          <div className='background_photo'>
            <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Here" />
          </div>
        </div>
        
        {/* Order Car */}
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

        {/* Experience Section */}
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

        {/* Bottom Card */}
        <div className="bottom-card">
          <div>
            <div>
              <div>
                <h1>More Than <span>30,000 </span> People Have Berent!</h1>
                <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic4.webp" alt="" />
                <p>Mi in enim venenatis ut gravida ante arcu libero. Pellentesque odio risus hac nisl in arcu. At etiam in at id vestibulum suspendisse ut. Pulvinar amet, suscipit dignissim egestas dictum quam urna augue pulvinar.</p>
                <h5>Mila Collier</h5>
                <p><span>30 years</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Download App */}
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
      </div>
    </>
  )
}
