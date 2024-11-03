// src/pages/Collaborate.js
import React from 'react';
import './pages.css'; // Assuming you have styling in pages.css
import './home.css'
const Collaborate = () => {
    return (
        
        <div className="collaborate-page">
            <div className='background'/>
            <h1>Collaborate with Other Creators</h1>
            <p>Welcome to the collaboration hub! Here, designers, artists, and developers come together to bring ideas to life.</p>
            
            <section className="collaboration-options">
                <h2>Find Your Ideal Partner</h2>
                <p>Looking for a developer? Need a designer to brainstorm? Start here:</p>
                <ul>
                    <li>Search by skills and project needs</li>
                    <li>View portfolios and experience levels</li>
                    <li>Send collaboration requests</li>
                </ul>
            </section>

            <section className="active-projects">
                <h2>Active Collaboration Projects</h2>
                <p>Check out what others are working on and join a project that excites you:</p>
                <ul>
                    <li>UI/UX Design for a new mobile app</li>
                    <li>Web development for an e-commerce site</li>
                    <li>Illustration and concept art for a game</li>
                </ul>
            </section>

            <section className="join-community">
                <h2>Join Our Community</h2>
                <p>Stay connected with like-minded creatives:</p>
                <button className="join-community-button">Join the Community</button>
            </section>
        </div>
    );
};

export default Collaborate;
