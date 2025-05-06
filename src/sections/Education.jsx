// src/components/Education.js
import React from 'react';
import '../styles/sections.css';

const educationData = [
  {
    degree: "Bachelor of Education in Basic Education",
    institution: "University for Development Studies",
    location: "Tamale, Ghana",
    dates: "Sep 2021 – Sep 2024"
  },
  {
    degree: "Diploma in Basic Education",
    institution: "University for Development Studies",
    location: "Tamale, Ghana",
    dates: "Sep 2019 – Jul 2021"
  },
  {
    degree: "Business",
    institution: "Damongo Senior High School",
    location: "Damongo, Ghana",
    dates: "Sep 2013 – Jul 2016"
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-section__title">Education</h2>
      <ul className="education-section__list">
        {educationData.map((ed, i) => (
          <li key={i} className="education-section__item">
            <h3 className="education-section__degree">{ed.degree}</h3>
            <div className="education-section__details">
              <span className="education-section__institution">{ed.institution}, {ed.location}</span>
              <span className="education-section__dates">{ed.dates}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
