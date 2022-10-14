import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import RegistrationForm from './components/RegistrationForm';
let App = () => {
  const [myData,setData] = useState([])
  
  const url = "https://countriesnow.space/api/v0.1/countries/states"
  
  useEffect(()=>{
    axios.get(url)
    .then((res)=> setData(res.data.data))
    .catch(e=>{
    console.log("e",e);
  })
  },[])

  return (
    <div className='App'>
      <RegistrationForm/>
      {
    myData.map(item =>{
      const{name,iso2}=item;
      const ab =[];
      ab.push({name});
      console.log(ab[0].name);
    })
  }
    </div>
  );
}

export default App;
