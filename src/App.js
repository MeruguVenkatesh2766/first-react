import React, { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';
let App = () => {
  const[val,setVal]=useState([])
  const[data,setData]=useState([])
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>setData(res.data))
  },[])

  const change=(e)=>{
    setVal(e.target.value)
    console.log(val)
  }

  return (
    <div className='App'>
      <input type="text" value={val} onChange={change} />
      {
        data.map((item,index)=>{
          return(
            <p key={item.id}>{item.id}</p>
          );
        })
      }
    </div>
  );
}

export default App;
