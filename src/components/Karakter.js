// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from 'axios';
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { response } from "msw";
import styled from "styled-components";
import Info from "./Info";
import { Accordion } from "react-bootstrap";

export default function Karakterler(){
    const [char, setChar]=useState([]);
    const[accordion,setActiveAccordion]=useState(-1)

    useEffect(()=>{
        
        axios.get('https://swapi.dev/api/people')
        
        .then(res=> {setChar(res.data.results)})
        
        .catch(err=>console.log(err));
        
    }, []);

    /*const ScButton=styled.button`
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
    
    `*/

    function toggleAccordion(index){
        if(index===accordion){
            setActiveAccordion(-1);
            return ;
        }
        setActiveAccordion(index);
    }

    const ScInfos=styled.div`
        color:white;
    `


    return(
        <>
        <div className="container">
            <div>
                <span className="accordion-title">Karakterler</span>
            </div>
            <div className="accordion-content">
                {char.map((person,index)=>
                    <div key={index} onClick={()=>toggleAccordion(index)}>
                        <div className="accordion-contentHeading">
                            <h3 className={accordion===index?"active":""}>{person.name}</h3>
                        </div>
                        
                        <ScInfos>
                        <div>
                        <p className={accordion===index?"active":"inactive"}>{'Height:'+person.height}</p>  
                        <p className={accordion===index?"active":"inactive"}>{"Gender:"+person.gender}</p>
                        <p className={accordion===index?"active":"inactive"}>{"Mass:"+person.mass}</p>
                        <p className={accordion===index?"active":"inactive"}>{"BirthYear:"+person.birth_year}</p>
                        <p className={accordion===index?"active":"inactive"}>{"Eye Color:"+person.eye_color}</p>
                        <p className={accordion===index?"active":"inactive"}>{"Skin Color:"+person.skin_color}</p>
                        </div>
                        </ScInfos> 
                </div>
                )}
            </div>
        </div>
        </>
        
        /*<div>
        
                {char.map(person=>( 
                    <ScButton key={person.name}>
                        {person.name}
                    </ScButton>
                ))}
           
        </div>*/
    )
        
        
    
}