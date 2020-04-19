import React from 'react';


export default function ContactCard(){
   return (
     <div className="ContactCard">
      <h1> Daniel</h1>
      <img className="portrait" src="https://res.cloudinary.com/dyic445sm/image/upload/v1587245400/Portfolio/daniel_efpnbg.jpg" alt="Portrait Author"/>
      <h3> Front-end Developer </h3>
      <div className="card-email">
         <img src="./images/gmail.png" alt=" Gmail Icon" />
         <p>danielsolheim1@gmail.com </p>
      </div>
      <div className="card-phone">
        <img src="/images/telephone.png" alt="Telephone icon" />
        <p>+47 97138707</p>
      </div>
    </div>
   );
}
