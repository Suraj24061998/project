import React, { useState } from 'react'
import './Check.css'
import img1 from '../chekout/icon/1.png'
import img2 from '../chekout/icon/2.png'
import img3 from '../chekout/icon/3.png'
import img4 from '../chekout/icon/4.png'
import Nav from '../Navigation/Nav'
import axios from 'axios'
import { toast  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'


function Check() {
    const {id}=useParams()
    const [account,Setaccount]=useState({
        name:"",mobile:"",email:"",address:"",country:"",state:"",pincode:"",userid: localStorage.getItem('userlogid'),productid:id
      })
      const hch=(e)=>{
          Setaccount({...account,[e.target.name]:e.target.value})
      }
      const chFn=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/check',account)
        .then((response)=>{
            console.log("Response Success",response)
            if(response.data.status===200){
               toast.success("order placed")
             
            }
            else{
                toast.error("order placed uncessfully")
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
                            <h1>Billing address</h1>
                        </div>
                        <form  className='needs-validation' onSubmit={chFn}>
                        <div class="row">
                                <div className="col-md-6 mb-3">
                                   <h4> <label for="firstName">  Name </label></h4>
                                    <input type="text" className='form-control' required  name='name' value={account.name} onChange={hch}/>
                                   
                                </div>
                                <div className="mb-3">
                                <h4> <label for="Mobilenumber">Mobile Number </label></h4>
                                <input type="text" className="form-control"  placeholder="" required  name="mobile"value={account.mobile} onChange={hch}/> 
                               
                            </div>
                                <div className="mb-3">
                                <h4> <label for="email">Email Address </label></h4>
                                <input type="email" className="form-control"  placeholder="" required name='email' value={account.email} onChange={hch}/> 
                               
                            </div>
                            <div className="mb-3">
                            <h4>  <label for="address">Address </label></h4> 
                                <input type="text" className="form-control"  placeholder="" required name='address' value={account.address} onChange={hch}/>
                                
                            </div>
                            <div className="row">
                                {/* <div className="col-md-5 mb-3">
                                    <h4><label for="country">Country </label></h4>
                                    <input type="text" className="form-control" required value={account.country} onChange={hch}/>
                                </div> */}
                                <div className="col-md-4 mb-3">
                                 <h4>   <label for="state">State </label> </h4>
                                   <input type="text" className="form-control" required  name='state' value={account.state} onChange={hch}/>
                                    
                                </div>
                                <div className="col-md-3 mb-3">
                                  <h4>  <label for="zip">Pincode</label></h4>
                                    <input type="text" className="form-control"  required name='pincode' value={account.pincode} onChange={hch}/>
                                    
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="same-address"/>
                                <label className="custom-control-label" for="same-address">
                                  <h4>  Shipping address is the same as my billing address </h4>
                                    </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info"/>
                                <label className="custom-control-label" for="save-info">
                                  <h4>Save this information for next time</h4>  
                                    </label>
                            </div>
                            <hr className="mb-4"/>
                            <div className="title"> <h1>Payment</h1> </div>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                                    <label className="custom-control-label" for="credit"><h4>Credit card</h4></label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                    <label className="custom-control-label" for="debit"><h4>Debit card</h4></label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                    <label className="custom-control-label" for="paypal"><h4>Paypal</h4></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="cc-name"><h4>Name on card</h4></label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="Debit/Credit" required/> 
                                    
                                   
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cc-number"><h4>Card number</h4> </label>
                                    <input type="number" className="form-control" id="cc-number" placeholder="" required/>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration"><h4>Expiration</h4></label>
                                    <input type="number/" className="form-control" id="cc-expiration" placeholder="" required/>
                                   
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration"><h4>CVV</h4></label>
                                    <input type="number" className="form-control" id="cc-cvv" placeholder="" required/>
                                   
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="payment-icon">
                                        <ul>
                                            <li><img class="img-fluid" src={img1}alt=""/></li>
                                            <li><img class="img-fluid" src={img2} alt=""/></li>
                                            <li><img class="img-fluid" src={img3} alt=""/></li>
                                            <li><img class="img-fluid" src={img4} alt=""/></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>

                                
                            </div>
                            {/* <button type="submit" class="btn btn-primary">Place order</button> */}
                            <button type="text" class="submit">Place order</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Check