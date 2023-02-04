import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './App.css';
import Karakterler from "./components/Karakter";
import Info from './components/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Dropdown } from 'bootstrap';
import { DropdownItem } from 'reactstrap';

const App = () => {

  const [open, setOpen]=useState(false);
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
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <Karakterler/>
        </div>
        <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
         
            
              <Info/>
            
          
        </div>
    </div>
  </div>
  );
}

export default App;
