import React from 'react';


export default function HomeProjects({name, id, description, imageSrc}){
  return (

      <div style={{ backgroundImage: `url(${imageSrc})` }}  key={id} className="project" >
          <p> {description} </p>
          <button> see more </button>
      </div>

  );
}
