import React, { useEffect, useState } from "react";
import axios from "axios";
import "./View.css";
import { toast  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";

function View() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/viewproduct")
      .then((result) => {
        console.log("successfully sent", result);
        setdata(result.data.data);
        console.log(result.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const addtocart = (a)=>{
console.log(a, 'product id');
console.log(localStorage.getItem('userlogid'), 'user id');
axios
      .post("http://localhost:8080/cart", {userid:localStorage.getItem('userlogid'),productid:a})
      .then((result) => {
        console.log("successfully sent", result);
        console.log(result);
        toast.info ("add to cart")
  
        
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  return (
    <div>
      <Nav />
      <div class="container-fluid bg-trasparent my-4 p-3">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
         
          {data.map((user) => {
            return (
              <>
              
                   <div className="card" style={{width: "18rem"}}>
  <img src={`http://localhost:8080/${user.image.originalname}`}
                     alt="product img"/>
  <div className="card-body">
    <h1 className="card-title">{user.name}</h1>
    <h6 className="card-text">{user.description}</h6>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{user.categorey}</li>
    <li className="list-group-item">₹{user.price}</li>  
  </ul>
  <div className="text-center my-4">
                        <div className="btn btn-warning">
                          <Link to={`/chekout/${user._id}`}> 
                          BuyNow 
                          </Link>
                          </div>
                      </div>
                      <div className="text-center my-4">
                        <div className="btn btn-warning">
                          <div onClick={()=>{addtocart(user._id)}}> Addcart</div>
                        </div>

                        </div>
                      
  
</div>
   
   


              </>
            );
          })}
       
        </div>
      </div>
    
    </div>
  );
}

export default View;
