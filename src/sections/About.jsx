import React from 'react';
import '../styles/sections.css';

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* Content */}
      <div className="about-section__content">
        <h2 className="about-section__title">About Me</h2>
        <p className="about-section__summary">
          A self-motivated professional facilitator and data analyst with a genuine interest in acquiring knowledge and leveraging expertise to drive impactful outcomes. Backed by successful professional and internship experiences, I excel in data analysis, interpretation, and presentation, while fostering collaboration and engagement in diverse cultural settings. Known for professionalism, adaptability, and a commitment to continuous learning, I seek opportunities to apply my facilitation and analytical skills in a dynamic working environment to contribute meaningfully to organizational goals and societal progress.
        </p>
        <div className="about-section__contact">
          <div><strong>Location:</strong> XW-0402-3448, Ghana</div>
          <div><strong>Phone:</strong> 054-154-3030 / 050-619-8719</div>
          <div><strong>Email:</strong> <a href="mailto:issahakuraqiiba98@gmail.com">issahakuraqiiba98@gmail.com</a></div>
        </div>
      </div>
    </section>
  );
}