import { useState,useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Login from "./pages/Login";
function App() {
  const [id, setId] = useState(1)
  const [data, setData] = useState({})
  async function apiCall(url) {
    try {
         console.log(id);
      const res = await fetch(url);
      const Data = await res.json();
      setId(Data?.id);
      setData(Data);
   
      
    }
    catch (err) {
      console.log("Getting an error while fetching the data")
    }
  }
  useEffect(() => {
    apiCall(`https://fakestoreapi.com/products/${id}`)
  }, [id])

  function Increment(){
    if( id >=20){
      setId(20);
      return
    }
    setId(id+1);
  }
    function Decrement(){
      if(id<=1){
        setId(1)
        return;
      }
    setId(id-1);
  }
  
  return (
    <div>
      
        <Card product={data}></Card>
      
      <button onClick={Increment}>+</button>
      <span>{id}</span>
      <button onClick={Decrement}>-</button>
       <Form></Form>
       <Login></Login>
    </div>
  );
}

export default App;
