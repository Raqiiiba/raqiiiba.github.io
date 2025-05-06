// src/components/Certifications.js
import React from 'react';
import '../styles/components.css';

const certs = [
  {
    title: "Basics Of Data Analysis",
    issuer: "Coursera",
    period: "Mar 2023 – Oct 2024"
  },
  {
    title: "Data Analysis with R-Programming",
    issuer: "Coursera",
    period: "Mar 2023 – Oct 2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <h2 className="certs-section__title">Online Certifications</h2>
      <ul className="certs-section__list">
        {certs.map((c, idx) => (
          <li key={idx} className="certs-section__item">
            <h3 className="certs-section__name">{c.title}</h3>
            <div className="certs-section__meta">
              <span className="certs-section__issuer">{c.issuer}</span>
              <span className="certs-section__period">{c.period}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
