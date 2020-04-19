import React from 'react';
import Intro from './Intro';
import Development from './Development';
import Experience from './Experience';
import ContactCard from './ContactCard';

export default function About(){
  return (
    <div className="About">
     <div className="aboutContainer">
       <ContactCard />
       <Intro />
       <Development />
       <Experience />
      </div>
    </div>

  );
}
