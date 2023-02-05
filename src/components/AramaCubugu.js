import React, {useState,useEffect} from "react";

export default function AramaCubugu(props){
    const {aramaYap, aramaKriteri}=(props);
    return (
        <div>
            <input value={aramaKriteri} type="text" placeholder="Arama" onChange={(event)=>aramaYap(event.target.value)}/>
        </div>
    )



}