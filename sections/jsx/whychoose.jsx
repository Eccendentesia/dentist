import React ,{useRef } from "react";
import "../css/whychoose.css";

//images
import dental_clinic from '../../images/dental_clinic.png'
import skill_doc from '../../images/skill_doc.png'
import dental_tools from '../../images/dental_tools.png'
import sterialize from '../../images/sterialization.png'
import quality_care from '../../images/quality_care.png'
import treatment from '../../images/treatment_tailored.png'

//animation lib import 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const WhyChoose = () => {
const data = [
  {
    tag: "Comfort",
    title: "A clinic designed for your ease",
    desc: "From soft lighting to ergonomic seating, every element serves your peace of mind. Dentistry should feel like sanctuary.",
    btn: "Discover",
    img: dental_clinic
  },
  {
    tag: "Expertise",
    title: "Decades of skill in every procedure",
    desc: "Our doctors trained at the finest institutions. They stay sharp through continuous learning and genuine passion for the craft.",
    btn: "Meet",
    img: skill_doc
  },
  {
    tag: "Technology",
    title: "Advanced tools for precise care",
    desc: "We use cutting-edge dental technology to ensure accurate diagnosis and minimally invasive treatments.",
    btn: "Explore",
    img: dental_tools
  },
  {
    tag: "Personal Care",
    title: "Treatment tailored to you",
    desc: "Every patient is unique. We create personalized treatment plans to match your needs and comfort.",
    btn: "Learn More",
    img: treatment
  },
  {
    tag: "Hygiene",
    title: "Sterilization you can trust",
    desc: "We follow strict hygiene protocols and international sterilization standards for your safety.",
    btn: "View Standards",
    img: sterialize
  },
  {
    tag: "Affordability",
    title: "Quality care within reach",
    desc: "Transparent pricing and flexible payment options make premium dental care accessible.",
    btn: "Check Plans",
    img: quality_care
  }
];
  const countRef = useRef([]);

  useGSAP(() => {
    countRef.current.forEach((el) => {
      const target = +el.getAttribute("data-count");

      let obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".results-main",
          start: "top 50%"
        },

        onUpdate: () => {
          el.innerText = Math.floor(obj.val).toLocaleString() + "+";
        },
      });
    });
  });
  return (
    <div className="why-main" id="about">
      <div className="container">

        {data.map((item, index) => (
          <div
            className={`why-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >

            {/* IMAGE */}
            <div className="why-img">
              <img src={item.img} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="why-content">
              <p className="why-tag">{item.tag}</p>
              <h2 className="why-title">{item.title}</h2>
              <p className="why-desc">{item.desc}</p>

              <div className="why-btn">
                <button>{item.btn}</button>
                <span>Arrow →</span>
              </div>
            </div>

          </div>
        ))}
        <div className="results-main">

      {/* OVERLAY CONTENT */}
      <div className="container results-content">
        
        {/* LEFT */}
        <div className="results-left">
          <p className="results-tag">Results</p>
          <h2>
            Numbers that speak <br /> for themselves
          </h2>
        </div>

        {/* RIGHT */}
        <div className="results-right">
          <p>
            Thousands of patients have walked through our doors. They came
            seeking change and left with confidence. These figures represent real
            transformations and the trust we've earned over years of dedicated
            work.
          </p>

          <div className="results-btn">
            <button>View</button>
            <span>Arrow →</span>
          </div>

          {/* COUNTERS */}
          <div className="results-stats ">
            <div>
              <h3 ref={(el) => (countRef.current[0] = el)} data-count="500">0</h3>
              <p>Happy Patients</p>
            </div>

            <div>
              <h3 ref={(el) => (countRef.current[1] = el)} data-count="1200">0</h3>
              <p>Procedures Done</p>
            </div>

            <div>
              <h3 ref={(el) => (countRef.current[2] = el)} data-count="15">0</h3>
              <p>Years Experience</p>
            </div>
          </div>

        </div>

      </div>
    </div>
      </div>
    </div>
  );
};