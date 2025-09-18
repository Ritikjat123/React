import { useState } from "react";
import "./App.css"
function App() {
  
const[fname,setFname]=useState("ritik");
const[lname,setLname]=useState("jat");
const[age,setAge]=useState("22");
const[city,setCity]=useState("indore");
const[pin,setPin]=useState("452008");
 
function ChangeUserName(){
  setFname("ritik jat");
  console.log(fname);

  
}
  return (
    <div className="App">
      <div className="card">
   <p>my name is {fname}</p>
   <p>my name is {lname}</p>
   <p>my age is {age}</p>
   <p>my city is {city}</p>
   <p>my pincode of city is {pin}</p>
    <button onClick={ChangeUserName}>click</button>
    </div>
    </div>
  );
}

export default App;
