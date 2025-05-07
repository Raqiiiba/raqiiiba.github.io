import React from 'react';
import '../styles/sections.css';

const hobbies = [
  "Volunteering in mentorship programs for young women & girls",
  "Reading & researching on women's empowerment and education equity",
  "Watching TV documentaries of successful women entrepreneurs",
  "Trying new recipes and cooking foreign & local dishes",
  "Reading mystery novels and poetry"
];

const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Waale", level: "Full Professional Proficiency" }
];

export default function HobbiesAndLanguages() {
  return (
    <section id="hobbies" className="hobbies-languages-section">
      <h2 className="hobbies-languages-section__title">Hobbies & Languages</h2>
      <div className="hobbies-languages-grid">
        
        <div className="hobbies-languages-content">
          <h3 className="hobbies-section__title">Hobbies & Interests</h3>
          <ul className="hobbies-section__list">
            {hobbies.map((h, i) => (
              <li key={i} className="hobbies-section__item">{h}</li>
            ))}
          </ul>
          <h3 className="languages-section__title">Languages</h3>
          <ul className="languages-section__list">
            {languages.map((lang, i) => (
              <li key={i} className="languages-section__item">
                <span className="languages-section__name">{lang.name}</span>
                <span className="languages-section__level">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hL_img">
          <img src={require('../assets/images/img3.jpg')} alt="img1" className="hL_img" /> 
       </div>
      </div>
    </section>
  );
}