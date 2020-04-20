import React, {useState, useEffect} from 'react';
import {SPECIFIC_URL} from '../../constants/api';
import { useParams } from "react-router-dom";


export default function ProjectDetail(){
   const [detail, setDetail] = useState([]);

   let {id} = useParams();

   let url = SPECIFIC_URL + id + '.json';


useEffect(() => {
    fetch(url)
      .then(function(result){
        return result.json()
      })
      .then(function(data){
      setDetail(data);
      })
      .catch(function (error){
        console.log(error)
      })

}, [url])

 const {name, githubLink, websiteLink, mainTool, taskDescription, firstImage, secondDescription, secondImage, resultDescription, learned1, learned2, learned3} = detail;



  return (
    <div className="ProjectDetail detail">
           <div className="detail--links">
              <h1> {name} </h1>
              <a className="detail--link detail--link__github" href={githubLink}>Github Repo</a>
              <a className="detail--link detail--link__website" href={websiteLink}> See Website</a>
           </div>
           <div className="detail--stats">
              <h3 className="detail--stats__mainTool"> {mainTool} </h3>
           </div>
           <div className="detail--textsection detail--textsection__task">
               <h3> The Task </h3>
               <p> {taskDescription} </p>
           </div>
           <img src={firstImage} alt={name} />
           <div className="detail--textsection">
               <p> {secondDescription} </p>
           </div>
           <img src={secondImage} alt={name}/>
           <div className="detail--textsection detail--textsection__result">
               <h3> Result </h3>
               <p> {resultDescription} </p>
           </div>
           <div className="detail--textsection">
                <h3> Learned </h3>
                <ul>
                   <li>{learned1}</li>
                   <li>{learned2}</li>
                   <li>{learned3}</li>
                </ul>
           </div>
    </div>
  );
}
