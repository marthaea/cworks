// src/pages/Home.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./pages.css"
import image1 from '../assets/boypeeping-removebg-preview.png'
import image2 from '../assets/inspiration.jpg'
import './home.css';

const Home = () => {
  const { user, theme } = useContext(AppContext);

  return (
    <div className='background'>
      <h1>Welcome, {user.name}!</h1>
      <p>Your theme is set to: {theme}</p>
      <div className='grid-container'>
        <img src={image1} alt='boy peeping' className='container'/>
        <div className='text-content'>
          <h1>This is cworks...</h1>
          <p>"Developers without inspiration are like coffee machines without coffee – <br></br>sure, they have the machinery to make magic happen, but without the fuel, nothing’s brewing!"<br></br>

Welcome to <strong>Cworks</strong>, the space where creative sparks meet and caffeine-laden dreams turn into code! <br></br>Here, we understand that every developer, designer, and artist has faced that wall where the ideas just... stop.<br></br> It's the <strong>dreaded Blank Screen Syndrome</strong>,<br></br> an affliction where the urge to code is there,<br></br> but the inspiration is as elusive as a missing semicolon in a thousand-line codebase.<br></br>

But worry not, weary creative – you’ve found your tribe! <br></br>Think of <strong>Cworks</strong> as the campfire around which the ambitious (and mildly over-caffeinated) gather. <br></br><strong>We’re here to share ideas, stories, and the occasional “Have you tried turning it off and on again?” joke.</strong> <br></br>Here, you can brainstorm, seek inspiration, and throw around ideas with <strong>people who get it.</strong><br></br>

Because,.. <br></br>let’s face it, talking about JavaScript closures or color palettes at family dinners only earns blank stares (or, if you're lucky, an awkward “Oh, cool!”). <br></br>This platform exists <strong>so you can finally connect with those who understand the thrill of a neatly aligned div or a seamless API integration.</strong> <br></br> Inspiration isn’t something that strikes in isolation – it grows, evolves, and downright flourishes in the company of like-minded folks.<br></br>

So, pull up a virtual chair, <br></br>refill that coffee, <br></br>and dive into a world where your next big idea is just a chat, a project board, or a new collaboration away.<br></br> Let’s build, brainstorm, and banish Blank Screen Syndrome once and for all.<br></br> Welcome to the creative haven that is <strong>Cworks</strong> – your inspiration station, brainstorm battleground, and where great minds actually think alike!
</p>
        </div>
      </div>
      
      
<img src={image2} alt='yeah!'/>
    </div>
  );
};

export default Home;
