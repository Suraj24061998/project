import React, { useState } from 'react'
import axios from 'axios'
import './Sign.css'
import { toast  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Nav from '../Navigation/Nav'

function Sign() {
    const [New,setNew]=useState({
        mobile:"",password:""
    })
    const hch=(e)=>{
        setNew({...New,[e.target.name]:e.target.value})
    }
    const chgFn=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/newacc',New).then((response)=>{
            console.log("Response Success",response)
            if(response.data.status===200){
              toast.success("account created")
             
            }
            else{
              toast.error(" account not created")
            }
         }).catch((err)=>{
          console.log("Response Failed")
          console.log(err.data)
         
         })
    }
  return (
    <div>
      <Nav/>
 <div className='log'>
          <form onSubmit={chgFn}>
       < div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Create your account</div>
      <div className="input-container ic1">
        <input  className="input" type="text" placeholder="Mobile number " required name='mobile' value={New.mobile} onChange={hch}/>
        
        <label for="firstname" class="placeholder">Mobile Number</label>
      </div>
      <div class="input-container ic2">
        <input className="input" type="text" placeholder=" password"  required name='password' value={New.password} onChange={hch}/>
       
        <label for="lastname" class="placeholder">password</label>
      </div>
    
      <button type="text" class="submit">submit</button>
      <Link to='/log'>
      <div className="subtitle">Exiting user? Login</div>
      </Link>

    </div>
    </form>
    </div>
    </div>
  )
}

export default Sign