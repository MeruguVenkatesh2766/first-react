import React from "react";
import {useEffect,useState} from 'react';

let Employee =()=>{

    const[data,setData]=useState([
        fname='',
        lname='',
        email=''
    ])

    const[fname,lname,email]=data;

    const handler=e=>{
        setData({...data,[e.target.fname] : [e.target.lname] [e.target.email]})
    }

    const submitHandler = e=>{
        e.preventDefault();
        console.log(data);
    }
    
    return(
        <div>
            <form>
                <input type="text" name="fname" value={fname} onChange={handler}/><br></br>
                <input type="text" name="lname" value={lname} onChange={handler}/><br></br>
                <input type="text" name="email" value={email} onChange={handler}/><br></br>
                <input type="submit" name="submit"/>
            </form>
        </div>

    );
}

export default Employee;