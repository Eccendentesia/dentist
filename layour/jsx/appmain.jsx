import React from "react";
import "../css/applayout.css";
import { Hero } from "../../sections/jsx/hero.jsx";
import { Service } from "../../sections/jsx/service.jsx";
import { WhyChoose } from "../../sections/jsx/whychoose.jsx";
import { Testimonial } from "../../sections/jsx/testimonial.jsx";
import { Team } from "../../sections/jsx/team.jsx";
import { FAQ } from "../../sections/jsx/faq.jsx";

export const Appmain = () => {
  return (<>
  
  <Hero/>
  <Service/>
  <WhyChoose />
  <Testimonial />
  <Team />
  <FAQ />

  </> );
};
