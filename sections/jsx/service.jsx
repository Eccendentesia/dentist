import React from "react";
import "../css/service.css";
//link
import { Link } from "react-router-dom";

// images
import teeth_cleaning from '../../images/teeth-cleaning.png';
import teeth_whitening from '../../images/teeth-whitening.png';
import cosmotic_dentistry from '../../images/cosmotic-dentistry.png';
import dental_implant from '../../images/dental-implant.png';
import orthodontics from '../../images/orthodontics.png';
import root_canal_therapy from '../../images/root-canal-therapy.png';

//animation
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

export const Service = () => {
   useGSAP(()=>{
  gsap.from('.service-cards',{
   scrollTrigger: {
        trigger: ".card-container",
        start: "top 60%",
       
      },
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger:0.3, 
      ease: "power3.out",
  })

  })
  const services = [
    {
      img: teeth_cleaning,
      title: "Teeth Cleaning",
      desc: "Professional cleaning to maintain oral hygiene and prevent cavities."
    },
    {
      img: teeth_whitening,
      title: "Teeth Whitening",
      desc: "Brighten your smile with safe and effective whitening treatments."
    },
    {
      img: cosmotic_dentistry,
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile with advanced cosmetic dental procedures."
    },
    {
      img: dental_implant,
      title: "Dental Implants",
      desc: "Permanent solution for missing teeth with natural look and feel."
    },
    {
      img: orthodontics,
      title: "Orthodontics",
      desc: "Align your teeth with braces and modern orthodontic solutions."
    },
    {
      img: root_canal_therapy,
      title: "Root Canal Therapy",
      desc: "Pain-free treatment to save infected or damaged teeth."
    }
  ];

  return (
    <div className="container-fluid service-main py-5" id="service">
      <div className="service-container">
        
        <p className="text-center service-title">Service</p>
        <p className="text-center service-text">
          Comprehensive dental care, refined
        </p>
        <p className="text-center service-para">
          Every treatment is delivered with clinical precision and a commitment
          <br /> to your lasting comfort
        </p>

        <div className="row g-4 mx-lg-5 card-container">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 service-cards" key={index}>
              
              <div className="card service-card  text-center">
                <img 
                  src={service.img} 
                  className="card-img-top service-img" 
                  alt={service.title} 
                />
                
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                  <Link className="btn header-book-btn" to="/book">
                    Book Now
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};