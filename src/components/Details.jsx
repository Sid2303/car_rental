import React from "react";
import "../styles/Details.scss";

export default function Details() {
  return (
    <>
      <div className="details">
        <div className="top-jeep">
          <div className="lhs">
            <h1>Mercedes Jeep</h1>
            <p>
              <span>$25</span>per day
            </p>
            <div className="jeep-photo">
              <img
                src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic1.webp"
                alt=""
              />
            </div>
            <div className="lower-left">
              <img
                src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic2.webp"
                alt=""
              />
              <img
                src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic3.webp"
                alt=""
              />
              <img
                src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic4.webp"
                alt=""
              />
            </div>
          </div>
          <div className="rhs">
            <div className="Technical-specifications">
              <p>Technical specifications</p>
              <div className="tech-cards">
                <div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon1.svg"
                      alt=""
                    />
                    <p>Class</p>
                    <p>Sports</p>
                  </div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon2.svg"
                      alt=""
                    />
                    <p>Doors</p>
                    <p>5</p>
                  </div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon3.svg"
                      alt=""
                    />
                    <p>Gearbox</p>
                    <p>Manual</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon4.svg"
                      alt=""
                    />
                    <p>Fuel Usage</p>
                    <p>10l/100 miles</p>
                  </div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon5.svg"
                      alt=""
                    />
                    <p>Fuel</p>
                    <p>Petrol</p>
                  </div>
                  <div>
                    <img
                      src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-icon6.svg"
                      alt=""
                    />
                    <p>Deposit</p>
                    <p>$250</p>
                  </div>
                </div>
              </div>
              <button>Book a car</button>
              <div className="car-equipment">
                <h4>Car Equipment</h4>
                <div>
                  <div>
                    <p>Abs</p>
                    <p>Air Bags</p>
                    <p>HD Audio System</p>
                  </div>
                  <div>
                    <p>A/C</p>
                    <p>Power Steering</p>
                    <p>Cruise Control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="unique-ways">
          <div className="unique-top">
            <img
              src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic5.svg"
              alt=""
            />
            <h1>
              25 unique cars available in our rentals. For every road, every
              condition
            </h1>
          </div>
          <div className="unique-bottom">
            <div className="lhs">
              <img
                src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-details-pic6.webp"
                alt=""
              />
            </div>
            <div className="rhs">
              <div className="bookingRide">
                <h4>Book your car</h4>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Car Type
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Sedan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pickup
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hatchback
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Vagon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sports Car
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Minivan
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Place of rental
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        City 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        City 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        City 3
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Place of return
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        City 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        City 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        City 3
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="book-date">
                  <div className="lable-for-rent">
                    <label htmlFor="">Rental</label>
                  </div>
                  <div className="input-for-rent">
                    <input type="date" />
                  </div>
                </div>
                <div>
                  <div className="book-date">
                    <div className="lable-for-rent">
                      <label htmlFor="">Return</label>
                    </div>
                    <div className="input-for-rent">
                      <input type="date" />
                    </div>
                  </div>
                </div>
                <button>Book</button>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </>
  );
}
