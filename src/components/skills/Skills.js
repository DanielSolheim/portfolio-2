import React from 'react';
import FrontEnd from './FrontEnd';
import Design from './Design';
import Other from './Other';

export default function Skills(){
  return (
    <div className="Skills">
       <Design/>
       <FrontEnd  />
       <Other />
    </div>

  );
}
