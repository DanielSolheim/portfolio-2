import React from 'react';
import SkillBlock from './SkillBlock';

export default function Skills(){
  return (
    <div className="Skills">

           <div className="Skills--container">
             <div className="Skills--description">
                <h2 className="Skills--header"> Skills Overview </h2>
                <p> I have been studying front end development for 2 years and these are some of the skills i aquired over these 2 years</p >
              </div>
              <SkillBlock skillHeading="Design" skill1="InDesign" skill2="Photoshop" skill3="Illustrator" skill4="UX design" skill5="Adobe XD" />
              <SkillBlock skillHeading="Front-End" skill1="React" skill2="Javascript" skill3="Node.js" skill4="HTML/CSS/SASS" skill5="Wordpress" />
              <SkillBlock skillHeading="Other" skill1="Wireframe" skill2="User Personas" skill3="DevOps" skill4="Gulp/Grunt" skill5="NPM" />
           </div>
    </div>

  );
}
