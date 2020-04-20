import React from 'react';

export default function SkillBlock({skillHeading, skill1, skill2, skill3, skill4, skill5 }){
  return(
     <div  className="Skillblock" >
        <h2> {skillHeading}</h2>
         <div className="skill skill1 ">
            <div className="skill-circle"> </div>
            <p> {skill1} </p>
         </div>
         <div className="skill skill1 ">
            <div className="skill-circle"> </div>
            <p> {skill2} </p>
         </div>
         <div className="skill skill1 ">
            <div className="skill-circle"> </div>
            <p> {skill3} </p>
         </div>
         <div className="skill skill1 ">
            <div className="skill-circle"> </div>
            <p> {skill4} </p>
         </div>
         <div className="skill skill1 ">
            <div className="skill-circle"> </div>
            <p> {skill5} </p>
         </div>
    </div>
  );
}
