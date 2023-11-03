import React, { useState } from 'react'
import './Account.css'
import { toast  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Nav from '../Navigation/Nav'

function Account() {
    const [account,Setaccount]=useState({
      name:"",mobile:"",email:"",address:"",country:"",state:"",pincode:""
    })
    const hch=(e)=>{
        Setaccount({...account,[e.target.name]:e.target.value})
    }
    const chFn=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/account',account).then((response)=>{
            console.log("Response Success",response)
            if(response.data.status===200){
               toast.success("Acccount created")
             
            }
            else{
                toast.error("Acccount Not created")
            }
         }).catch((err)=>{
          console.log("Response Failed")
          console.log(err.data)
          alert("Login faild")
         })
    }
  return (
    <div>
        <Nav/>
        <div className="cart-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-6 mb-3">
                        <div className="checkout-address">
                        <div class="title-left">
                            <h1>Account</h1>
                        </div>
                        <form  className='needs-validation' onSubmit={chFn} >
                        <div class="row">
                                <div className="col-md-6 mb-3">
                                   <h4> <label for="firstName">  Name </label></h4>
        <input type="text" className='form-control' required  name='name' value={account.name} onChange={hch}/>
                                   
                                </div>
                                <div className="mb-3">
                                <h4> <label for="Mobilenumber">Mobile Number </label></h4>
                                <input type="text" className="form-control" required name="mobile"value={account.mobile} onChange={hch}/> 
                               
                            </div>
                                <div className="mb-3">
                                <h4> <label for="email">Email Address </label></h4>
                                <input type="email" className="form-control"  required name='email' value={account.email} onChange={hch}/> 
                               
                            </div>
                            <div className="mb-3">
                            <h4>  <label for="address">Address </label></h4> 
                                <input type="text" className="form-control"  placeholder="" required name='address' value={account.address} onChange={hch}/>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <h4><label for="country">Country </label></h4>
                                    <input type="text" className="form-control" required name='country' value={account.country} onChange={hch}/>
                                </div>
                                <div className="col-md-4 mb-3">
                                 <h4>   <label for="state">State </label> </h4>
                                   <input type="text" className="form-control" required name='state' value={account.state} onChange={hch}/>
                                    
                                </div>
                                <div className="col-md-3 mb-3">
                                  <h4>  <label for="zip">Pincode</label></h4>
                                    <input type="text" className="form-control"  required name='pincode' value={account.pincode} onChange={hch}/>
                                    
                                </div>
                            </div>
                            </div>
                            <button type="text" class="submit">submit</button>
                          
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account