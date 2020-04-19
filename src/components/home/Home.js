import React from 'react';
import HomeHero from './HomeHero';
import {BASE_URL} from '../../constants/api';
import HomeProjects from './HomeProjects';
import {useState, useEffect} from "react";

export default function Home(){
const [projects, setProjects] = useState([]);


useEffect (function(){
fetch(BASE_URL)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    setProjects(json.projects)
  })
  .catch(function(error){
    console.log(error);
  });

},[]);



  return (
    <div className="Home">
       <HomeHero/>


          <div className="HomeProjects">
            <h1> Featured Projects </h1>

              {projects.map(function(project){
                const {name, id, description, imageSrc} = project;

                return(
                      <HomeProjects
                      name={name}
                      id={id}
                      description = {description}
                      imageSrc={imageSrc}
                      key={id}
                      />
                    )
                  }
                )
              }
         </div>
    </div>

  );
}
