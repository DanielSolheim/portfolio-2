import React from 'react';
import {Link } from 'react-router-dom';


export default function HomeProjects({name, id, description, imageSrc}){
  //why is id undefined?
  console.log(id); 
  return (

      <div style={{ backgroundImage: `url(${imageSrc})` }}  key={id} className="project" >
       <div className="overlay">
          <p> {description} </p>
          <Link className="game--link"to={"project/" + id}>
            <button className="game--button">
              View
           </button>
          </Link>
        </div>
      </div>

  );
}
