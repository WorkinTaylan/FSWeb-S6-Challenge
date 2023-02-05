import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './App.css';
import Karakterler from "./components/Karakter";
import Info from './components/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const App = () => {

  /*const [char, setChar]=useState([]);
  const [pageNumber, setPageNumber]=useState("2");

  useEffect(()=>{
    const fetchChar=()=>{
      axios
      .get('https://swapi.dev/api/people/?page='+pageNumber)

      .then(res=>{setChar(res.data.results)
      console.log(res)})
    }

    fetchChar();
  }, [pageNumber] )

  if(!char) return <h3>EXTERMINATE</h3>*/
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
      <h1 className="Header">Karakterler</h1>
      
          <Karakterler/>
       
    </div>      
        
    
 
  );
}

export default App;
