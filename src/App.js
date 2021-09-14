
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [info, setInfo] = useState([]);
    useEffect(()=>
   
    {getinfo()},[]);
  
    const getinfo = () =>{
    axios.get("https://gorest.co.in/public/v1/users").then(response=>{
      console.log(response)
      setInfo(response.data.data)
    }
    );

  };
  return (
    <div>
      {info.map((inf)=> {
      
              return<li>{ inf.name}</li>}      
      )}
 
      
      
      </div>
     
  );
}

export default App;
