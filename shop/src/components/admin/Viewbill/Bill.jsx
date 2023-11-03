import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Bill() {
    const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/viewbill")
      .then((result) => {
        console.log("successfully sent", result);
        setdata(result.data.data);
        console.log(result.data.msg);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  
  return (
    <div>
      
         {data.map((admin) => {
        return (
          <div >
    
    <table class="table">
  <thead>
    <tr>
    
      <th scope="col"> {admin.name}</th>
      <th scope="col">{admin.mobile}</th>
      <th scope="col"> {admin.email}</th>
      <th scope="col"> {admin.address}</th>
      <th scope="col"> {admin.pincode}</th>
      <th scope="col"> {admin.state}</th>
      <th scope="col"> product{admin.productid}</th>
      <th scope="col"> user {admin.userid}</th>
     
      
      

    
    </tr>
  </thead>
  
</table>







          </div>
        );
      })}
  

        
    </div>
  )
}

export default Bill