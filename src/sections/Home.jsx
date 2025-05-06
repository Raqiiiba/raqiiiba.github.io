import React from 'react';
import { motion } from 'framer-motion';
import '../styles/sections.css';

export default function Home() {
  return (
    <motion.section
      id="home"
      className="home-banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      
      <motion.div
        className="home-banner__content"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="home-banner__greeting">Hi, I’m Raqiiba</h1>
        <p className="home-banner__subtitle">A Data Analyst & Facilitator</p>
        <a href="../../public/Raqiiba_Issahaku_CV.pdf" className="home-banner__cta">
          View Resume
        </a>
      </motion.div>

      {/* Video */}
      <motion.div
        className="home-banner__video-wrapper"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <video autoPlay muted loop className="home-banner__video">
          <source src={require('../assets/banner-vid.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.section>
        );
        }