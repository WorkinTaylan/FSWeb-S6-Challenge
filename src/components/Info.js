import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "bootstrap";
import Karakterler from "./Karakter";

export default function Info (){
  /*const [char, setChar]=useState([]);

  useEffect(()=>{
      
    axios.get('https://swapi.dev/api/people')
        
    .then(res=> {console.log(res.data.results);setChar(res.data.results)}
    )
    
    .catch(err=>console.log(err));
    
}, []);
  

 const ScButton=styled.button`
  display:flex;
  flex-direction:column;
  margin:auto;
  `



  return(
      

      <div>
      
              {char.map(person=>( 
                  <div>
                  
                      <p>{"height:"+person.height}</p>
                      <p>{"gender:"+person.gender}</p>
                      <p>{"mass:"+person.mass}</p>
                      <p>{"BirthYear:"+person.birth_year}</p>
                      <p>{"Eye Color:"+person.eye_color}</p>
                      <p>{"Skin Color:"+person.skin_color}</p>
                      
                  </div>
              ))}
         
      </div>
  )
      
      */
  
}