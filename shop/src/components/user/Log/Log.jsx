import React, { useState } from 'react'
import axios from 'axios'
import './Log.css'
import { Link } from 'react-router-dom'
import Nav from '../Navigation/Nav'
import { toast  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Log() {
    const [log,setLog]=useState({
        mobile:"",password:""
    })
    const hch=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const chgFn=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/login',log).then((response)=>{
            console.log("Response Success",response)
            if(response.data.status===200){
              // alert("Login sucssfully")
              toast.success('Login sucssfully' )
             localStorage.setItem('userlogid', response.data.data._id)
            }
            else{
              // alert("Login faild")
              toast.error('Login faild')
              
            }
         }).catch((err)=>{
          console.log("Response Failed")
          console.log(err.data)
          // alert("Login faild")
          toast.error('Login faild')
         
         })
    }
  return (
    <div>
      <Nav/>
<div className='log'>
        <form onSubmit={chgFn}>
       < div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Please Login</div>
      <div className="input-container ic1">
        <input  className="input" type="text" placeholder=" mobile Number" required name='mobile' value={log.mobile} onChange={hch}/>
        
        <label for="firstname" class="placeholder">Mobile Number</label>
      </div>
      <div class="input-container ic2">
        <input className="input" type="text" placeholder="password "  required name='password' value={log.password} onChange={hch}/>
       
        <label for="lastname" class="placeholder">password</label>
      </div>
    
      <button type="text" class="submit">submit</button>
     
      <div className="subtitle">
        <Link to="/sign"> <p>New user?</p></Link>
        </div>
      

    </div>
    </form>
    </div>
    </div>
  )
}

export default Log