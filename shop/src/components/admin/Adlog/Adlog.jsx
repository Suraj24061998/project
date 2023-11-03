import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Adlog.css'

function Adlog() {
    const navigate=useNavigate();
    const [log,setLog]=useState({
        email:"",
        password:""
    })
    const hch=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const chgFn=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/adminlog',log).then((response)=>{
          console.log("Response Success",response)
          if(response.data.status===200){
            alert("Login suessfully")
            navigate('/adhome')
          }
       }).catch((err)=>{
        console.log("Response Failed")
        console.log(err.data)
        alert("Login faild")
       
       })
    }
  return (
    <div className='all'>
       <div className="adminlog">
      <h1>Admin</h1>
      <form  onSubmit={chgFn}>
            <input type="text" placeholder='Username' name="email" required value={log.email} onChange={hch}/>
            <input type="password"  placeholder=' Password' name="password" required value={log.password} onChange={hch}/>
            <button type="submit" class="btn btn-primary">Log IN</button>
        </form>
     </div> 
    </div>
  )
}

export default Adlog