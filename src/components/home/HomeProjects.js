  import React from 'react';
import {Link } from 'react-router-dom';
/*setting bg image in  react :  style={{ backgroundImage: `url(${imageSrc})` }} */

export default function HomeProjects({name, id, description, imageSrc}){
  //why is id undefined?
  console.log(id);
  return (

      <div  key={id} className="project" >
          <h3 className="project--header">{name}</h3>
          <div className="project--image"  >
            <img src={imageSrc}  alt={name}/>
          </div>
          <p className="project--description"> {description} </p>
          <Link className="project--link"to={"project/" + id}>
            <button className="game--button">
              Read More!
            </button>
          </Link>

      </div>

  );
}
