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

 const {name, description, imageSrc} = detail;



  return (
    <div className="ProjectDetail">
       <h3> {name} </h3>
       <p> {description} </p>
       <img src={imageSrc} alt={description} />  
    </div>
  );
}
