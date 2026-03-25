import React from "react";
import "../css/team.css";

//doctors images 
import d1 from '../../images/doc1.png'
import d2 from '../../images/doc2.png'
import d3 from '../../images/doc3.png'
import d4 from '../../images/doc4.png'
import d5 from '../../images/doc5.png'
import d6 from '../../images/doc6.png'
export const Team = () => {
  const doctors = [
    {
      name: "Dr. Marcus Reid",
      role: "Lead dentist",
      desc: "Twenty years perfecting implant work. Marcus believes every smile tells a story worth getting right.",
      img:d1
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Cosmetic specialist",
      desc: "Artist and scientist combined. Elena designs smiles that look natural and feel like home.",
      img:d2
    },
    {
      name: "Dr. James Chen",
      role: "Oral surgeon",
      desc: "Steady hands and sharper mind. James handles complex cases with the calm of someone who has seen it all.",
      img:d3
    },
    {
      name: "Dr. Sophia Andersen",
      role: "Hygiene director",
      desc: "Prevention is her passion. Sophia teaches patients that healthy teeth start with understanding and commitment.",
      img:d4
    },
    {
      name: "Dr. Thomas Wright",
      role: "Prosthodontist",
      desc: "Restoring smiles after loss. Thomas brings both technical skill and emotional intelligence to every case.",
      img:d5
    },
    {
      name: "Dr. Lisa Patel",
      role: "Orthodontist",
      desc: "Alignment is her language. Lisa straightens teeth and builds confidence, one wire at a time.",
      img:d6
    }
  ];

  return (
    <div className="team-main" id="team">
      <div className="container team-container">

        {/* HEADER */}
        <div className="team-header">
          <span>Team</span>
          <h2>Our doctors</h2>
          <p>Skilled hands guided by genuine care for every patient.</p>
        </div>

        {/* GRID */}
        <div className="team-grid">
          {doctors.map((doc, index) => (
            <div key={index} className="team-card">

              {/* IMAGE PLACEHOLDER */}
              <img className="team-img" src={doc.img}/>

              <h4>{doc.name}</h4>
              <span className="role">{doc.role}</span>

              <p>{doc.desc}</p>

              {/* SOCIAL ICONS */}
              <div className="team-icons">
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-dribbble"></i>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};