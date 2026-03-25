import React from "react";
import "../css/hero.css";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import TextType from '../../animations/typing.jsx';

//images
import img1 from '../../images/hero-img.png'
import img2 from '../../images/hero-img2.png'
import img3 from '../../images/hero-img3.png'

//register
gsap.registerPlugin(ScrollTrigger)
export const Hero = () => {
  useGSAP(()=>{
  gsap.from('.img',{
   scrollTrigger: {
        trigger: ".image-collage",
        start: "top 60%",
        
      },
      y: 40,
      opacity: 0,
      duration: 1.4,
      stagger:0.2, 
      ease: "power3.out",
  })

  })

  return (
    <>
      <div className="container hero-main" id="hero">
        <div className="hero-container my-5">
    <TextType 
          className="hero-title text-center"
          text="Your smile deserves"
          typingSpeed={75}
          initialDelay={0}
          pauseDuration={1000}
          deletingSpeed={0}
          loop={false}
          showCursor={false}
        />

        {/* SECOND LINE (DELAYED START) */}
        <TextType 
          className="hero-title text-center"
          text="Precision and care"
          typingSpeed={75}
          initialDelay={2000}   // 👈 delay after first finishes
          pauseDuration={1000}
          deletingSpeed={0}
          loop={false}
          showCursor
          cursorCharacter="_"
        />
          <p className="hero-para text-center my-5">
            Experience advanced dental artistry where cutting-edge technology{" "}
            <br /> meets the human touch. We craft smiles that last.
          </p>
          <div className="d-flex justify-content-center hero-btn-container">
            <button className="btn hero-begin-btn">Begin</button>
            <button className="btn hero-learn-btn">Learn More</button>
          </div>
          <div className="image-collage ">
            <img src={img1} alt="" className="img img-left" />
            <img src={img2} alt="" className="img img-center" />
            <img src={img3} alt="" className="img img-right" />
          </div>
        </div>
      </div>
    </>
  );
};
