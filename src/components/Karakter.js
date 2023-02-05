// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from 'axios';
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AramaCubugu from "./AramaCubugu";

export default function Karakterler(){
    const [char, setChar]=useState([]);
    const[accordion,setActiveAccordion]=useState()
    const[page, setPageNum]=useState(2)
    const [aramaKriteri, setaramaKriteri]=useState(null);
   

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
    const aramaYap=(e)=>{
        setaramaKriteri(e);
        setChar(char.filter((item)=>item.name.includes(e)))
    }

    function toggleAccordion(index){
        if(index===accordion){
            setActiveAccordion();
            return ;
        }
        setActiveAccordion(index);
    }

    const ScInfos=styled.div`
        color:white;
        text-align:left;
    `


    return(
        <>
        <div>
            <AramaCubugu aramaYap={aramaYap} aramaKriteri={aramaKriteri}/>
        </div>
        <div className="container">
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