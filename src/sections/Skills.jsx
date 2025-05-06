// src/components/Skills.js
import React from 'react';
import '../styles/sections.css';

const skills = [
  "Lesson & curriculum planning",
  "Data interpretation & information organization",
  "Effective communication",
  "Multitasking",
  "Logical reasoning",
  "Teamwork & organization",
  "Time management",
  "Microsoft Office proficiency",
  "Attention to detail",
  "Problem solving",
  "Critical thinking"
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-section__title">Skills</h2>
      <ul className="skills-section__list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skills-section__item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
