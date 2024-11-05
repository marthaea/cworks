// src/pages/Portfolio.js
import React from 'react';
import './home.css'

const Portfolio = () => (
  <div className='background'>
    <h2>Portfolio</h2>
    <div className="portfolio-item">
      <img src="project-thumbnail.jpg" alt="Project Thumbnail" />
      <h3>Project Title</h3>
      <p>Project description goes here.</p>
    </div>
  </div>
);

export default Portfolio;
