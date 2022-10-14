
import { useEffect,useState } from 'react';
import axios from 'axios';

let Countries=()=>
{
const [myData,setData] = useState([])
  
const url = "https://countriesnow.space/api/v0.1/countries/states"

useEffect(()=>{
  axios.get(url)
  .then((res)=> setData(res.data.data))
  .catch(e=>{
  console.log("e",e);
})
},[])

return(
<>
{
    myData.map(item =>{
      const{name,iso2}=item;
      const ab =[];
      ab.push({name});

      const handleChange = event => {
        console.log(event.target.value);
      };
      <select onChange={handleChange}>
      {ab.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
    })
  }
  </>
);
}

export default Countries;