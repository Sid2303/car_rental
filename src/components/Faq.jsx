import React, { useState } from 'react';
import "../styles/Faq.scss";

export default function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const data = [
    {
      title: "Feugiat non in risus adipiscing mattis. Ut elit tempor.",
      description: "Suspendisse orci magna iaculis mi. Fusce posuere cubilia Curae, Vivamus est neque, blandit iaculis, diam vestibulum faucibus augue.",
    },
    {
      title: "Feugiat non in risus adipiscing mattis. Ut elit tempor.",
      description: "Suspendisse orci magna iaculis mi. Fusce posuere cubilia Curae, Vivamus est neque, blandit iaculis, diam vestibulum faucibus augue.",
    },
    {
      title: "Feugiat non in risus adipiscing mattis. Ut elit tempor.",
      description: "Suspendisse orci magna iaculis mi. Fusce posuere cubilia Curae, Vivamus est neque, blandit iaculis, diam vestibulum faucibus augue.",
    },
    {
      title: "Feugiat non in risus adipiscing mattis. Ut elit tempor.",
      description: "Suspendisse orci magna iaculis mi. Fusce posuere cubilia Curae, Vivamus est neque, blandit iaculis, diam vestibulum faucibus augue.",
    },
  ];

  return (
    <>
      <div className="hero-section">
        <div className='lhs'>
          <p>FAQ</p>
          <h1>Didn't you find everything you were looking for?<span>Find all the answers below</span> </h1>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-home-pic3.svg" alt="" />
        </div>
        <div className='rhs'>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-icon4.svg" alt="" />
        </div>
      </div>

      <div className="about-car">
        <div className='car-image'>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-faq-pic1.webp" alt="" />
        </div>
        <div className='accordians'>
          <div>
            <h1>About Car</h1>
            <div>
              <div className="accordian">
                {data.map((item, i) => (
                  <div className={`item ${selected === i ? 'show' : ''}`} key={i}>
                    <div className="title" onClick={() => toggle(i)}>
                      <h2>{item.title}</h2>
                      <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className="content">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>About Becarrental</h1>
            <div>
            <div className="accordian">
              {data.map((item, i) => (
                <div className={`item ${selected === i ? 'show' : ''}`} key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.title}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className="content">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className='curve'>
          <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-faq-pic2.svg" alt="" />
        </div>
      </div>
        <div className="looking-for-car">
          <div>
          <div className='lhs'>
            <h1>Looking for a car?</h1>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-offer-pic8.svg" alt="" />
            <h2><span>+91</span>3 8376 6284</h2>
            <div>
              <div>
                <p>Monday - Friday</p>
                <p>09:00 AM - 06:00 PM</p>
              </div>
              <div>
                <p>Saturday</p>
                <p>10:00 AM - 02:00 PM</p>
              </div>
            </div>
            <button>Book a car</button>
          </div>
          <div className='rhs'>
            <img src="https://themes.muffingroup.com/be/carrental3/wp-content/uploads/2022/02/carrental3-offer-pic7.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
