// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from 'axios';
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { response } from "msw";
import styled from "styled-components";

export default function Karakterler(){
    const [char, setChar]=useState([]);

    useEffect(()=>{
        
        axios.get('https://swapi.dev/api/people')
        
        .then(res=> {console.log(res.data.results);setChar(res.data.results)}
        )
        
        .catch(err=>console.log(err));
        
    }, []);

    const ScButton=styled.button`
    display:flex;
    flex-direction:column;
    margin:2%;
    margin-left:40%;
    height:5vh;
    Width: 10em;
    text-align:center;
    color:green;
    background-color:black;
    opacity:20;
    
    `

    return(
        

        <div>
        
                {char.map(person=>( 
                    <ScButton key={person.name}>
                        {person.name}
                    </ScButton>
                ))}
           
        </div>
    )
        
        
    
}