import React from 'react';
import Intro from './Intro';
import Development from './Development';
import Experience from './Experience';

export default function About(){
  return (
    <div className="About">
       <Intro />
       <Development />
       <Experience /> 
    </div>

  );
}
