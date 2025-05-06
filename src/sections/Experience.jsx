// src/components/Experience.js
import React from 'react';
import '../styles/sections.css';

const experiences = [
  {
    role: "Teacher",
    company: "Peeli-Sung Royal Academy",
    location: "Wa, Upper West",
    dates: "Sep 2023 – Present",
    duties: [
      "Performed administrative duties in absence of office administrator.",
      "Engaged with parents on fee inquiries, fostering trust and transparency.",
      "Coordinated PTA meeting reminders via email and SMS.",
      "Represented colleagues at stakeholder events with school leadership.",
      "Taught, graded, and mentored students to support academic growth.",
      "Balanced teaching with administrative and stakeholder tasks."
    ]
  },
  {
    role: "CODEO Observer",
    company: "Coalition of Domestic Election Observers (CODEO)",
    location: "Wa, Upper West",
    dates: "Dec 2024",
    duties: [
      "Independently monitored presidential and parliamentary elections.",
      "Documented materials availability, timelines, and notable incidents.",
      "Provided time-stamped reports to support electoral transparency."
    ]
  },
  {
    role: "Teacher",
    company: "Bamahu Basic School",
    location: "Wa, Upper West",
    dates: "Oct 2021 – Sep 2022",
    duties: [
      "Prepared lesson plans aligning with learning objectives.",
      "Researched and applied innovative teaching strategies.",
      "Used diverse materials to enhance pupil understanding."
    ]
  },
  {
    role: "Teacher",
    company: "Kabanye Islamic Primary",
    location: "Wa, Upper West",
    dates: "Sep 2021 – Oct 2021",
    duties: [
      "Managed classroom of 30–35 students across subjects.",
      "Collaborated with teachers on performance improvement plans."
    ]
  },
  {
    role: "Polling Assistant",
    company: "Ghana Electoral Commission",
    location: "Wa, Upper West",
    dates: "Dec 2020",
    duties: [
      "Set up polling stations with required materials and equipment.",
      "Guided voters through the voting process.",
      "Collaborated to resolve on-site issues during elections."
    ]
  },
  {
    role: "Verification Officer",
    company: "Ghana Electoral Commission",
    location: "Wa, Upper West",
    dates: "Dec 2016",
    duties: [
      "Trained on electoral laws and procedures.",
      "Ensured impartiality, confidentiality, and integrity.",
      "Verified voter IDs and eligibility with high accuracy."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-section__title">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="experience-section__item">
          <div className="experience-section__header">
            <h3 className="experience-section__role">{exp.role}</h3>
            <span className="experience-section__dates">{exp.dates}</span>
          </div>
          <div className="experience-section__company">
            {exp.company}, {exp.location}
          </div>
          <ul className="experience-section__duties">
            {exp.duties.map((duty, i) => (
              <li key={i}>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
