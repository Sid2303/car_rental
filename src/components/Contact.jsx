import React from 'react'
import "../styles/Contact.scss"

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className='upperSection'>
          <div className='leftSide'>
            <p>Contact</p>
            <h1>Contact us to schedule an appointment. We look forward to seeing you!</h1>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
          </div>
          <div className='rightSide'>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
          </div>
        </div>
        <div className='lowerSection'>
          <div className="lowerLeft">
            <div className="phone">
              <div>
                <p>Phone:</p>
              </div>
              <div>
                <h3>+91</h3>
                <h1>5337841245</h1>
              </div>
            </div>
            <div className="mail">
              <div>
                <p>Mail:</p>
              </div>
              <div>
                <h1>noreply@envato.com</h1>
              </div>
            </div>
            <div className="time">
              <div>
                <p>Monday - Friday</p>
                <p>09:00 AM - 06:00 PM</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>10:00 AM - 02:00 PM</p>
              </div>
            </div>
          </div>
          <div className="lowerRight">
            <div className="bookingRide">
              <h4>Book your car</h4>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Car Type
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sedan</a></li>
                  <li><a className="dropdown-item" href="#">Pickup</a></li>
                  <li><a className="dropdown-item" href="#">Hatchback</a></li>
                  <li><a className="dropdown-item" href="#">Vagon</a></li>
                  <li><a className="dropdown-item" href="#">Sports Car</a></li>
                  <li><a className="dropdown-item" href="#">Minivan</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Place of rental
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">City 1</a></li>
                  <li><a className="dropdown-item" href="#">City 2</a></li>
                  <li><a className="dropdown-item" href="#">City 3</a></li>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Place of return
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">City 1</a></li>
                  <li><a className="dropdown-item" href="#">City 2</a></li>
                  <li><a className="dropdown-item" href="#">City 3</a></li>
                </ul>
              </div>
              <div className='book-date'>
                <div className='lable-for-rent'>
                  <label htmlFor="">Rental</label>
                </div>
                <div className='input-for-rent'>
                  <input type="date" />
                </div>
              </div>
              <div>
                <div className='book-date'>
                <div className='lable-for-rent'>
                    <label htmlFor="">Return</label>
                  </div>
                  <div className='input-for-rent'>
                    <input type="date" />
                  </div>
                </div>
              </div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>

      <div className="showrooms">
        <div>
          <h1>Showrooms</h1>
          <div>
            <div className='addresses'>
              <div>
                <div>
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-contact-pic2.png" alt="" />
                </div>
                <div>
                  <h5>Address 1</h5>
                  <p>Level 13, 2 Elizabeth, Victoria</p>
                  <p>3000, Australia</p>
                </div>
              </div>
              <div>
                <div>
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-contact-pic2.png" alt="" />
                </div>
                <div>
                  <h5>Address 1</h5>
                  <p>Level 13, 2 Elizabeth, Victoria</p>
                  <p>3000, Australia</p>
                </div>
              </div>
              <div>
                <div>
                  <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-contact-pic2.png" alt="" />
                </div>
                <div>
                  <h5>Address 1</h5>
                  <p>Level 13, 2 Elizabeth, Victoria</p>
                  <p>3000, Australia</p>
                </div>
              </div>
            </div>
          <div>
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabIndex="0"
              />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
