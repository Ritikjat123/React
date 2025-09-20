import { useState } from "react";
import MainCardContainer from "./components/MainCardContainer";


function App() {
const[myname,setMyname]=useState('')

function sendProps(data){
  setMyname(data);
}

 
  return (
    <div className="App">
       <h1>Name:{myname}</h1>
       <MainCardContainer sendingp={sendProps}></MainCardContainer>
    </div>
  );
}

export default App;
