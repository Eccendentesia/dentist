import React from "react";
import "../css/testimonial.css";

import c1 from '../../images/client1.png'
import c2 from '../../images/client2.png'
import c3 from '../../images/client3.png'

export const Testimonial = () => {
  const reviews = [
    {
      text: `"I came in nervous and left feeling like myself again. The team made me feel heard and cared for every step of the way."`,
      name: "Sarah Mitchell",
      role: "Patient, Seattle",
      img: c1
    },
    {
      text: `"Amazing experience. The doctors are extremely professional and kind. Highly recommend!"`,
      name: "John Carter",
      role: "Patient, New York",
      img: c3
    },
    {
      text: `"Best dental care I’ve ever had. Everything was smooth and comfortable."`,
      name: "Emily Watson",
      role: "Patient, Chicago",
      img: c2
    },
  ];
   
  return (
    <div className="review-main" id="testimonial">
      <div className="container">

        <div
          id="reviewCarousel"
          className="carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval={3000}
          data-bs-pause="false"
        >
          <div className="carousel-inner">

            {reviews.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="review-content">

                  {/* LEFT IMAGE */}
                  <div className="review-video">
                    <div className="video-box">
                      <img src={item.img} alt={item.name} />
                    </div>
                  </div>

                  {/* RIGHT TEXT */}
                  <div className="review-text">
                    <div className="stars">⭐⭐⭐⭐⭐</div>

                    <p className="review-para">{item.text}</p>

                    <div className="review-user">
                      <div>
                        <h6>{item.name}</h6>
                        <span>{item.role}</span>
                      </div>

                     
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};