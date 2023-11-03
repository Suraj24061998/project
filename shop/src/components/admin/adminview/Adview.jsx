import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Adview() {
  const DelFn=(e)=>{
    axios.post(`http://localhost:8080/delete/${e}`)
    .then((result) => {
      console.log("successfully sent", result);
      // console.log(result.data.msg);
      setx(prevState=>!prevState)
      alert("product deleted")
    })
    .catch((error) => {
      console.log("error", error);
    });

    
  }
    const [data,setdata]=useState([])
    const [x, setx] = useState(false)
    useEffect(()=>{
     axios.post('http://localhost:8080/viewproduct')
     .then((result) => {
       console.log("successfully sent", result);
       setdata(result.data.data);
       console.log(result.data.msg);
     })
     .catch((error) => {
       console.log("error", error);
     });
    
      },[x])
     
     
  return (
    <div>
 <h1>products</h1>
      {data.map((admin) => {
        return (
          <div >
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col"> <img src={`http://localhost:8080/${admin.image.originalname}`} width="100" height="100"/></th>
      <th scope="col">{admin.name}</th>
      <th scope="col">{admin.price}</th>
      <th scope="col"> {}</th>
      <th scope="col"><button type="button" class="btn btn-success">
        <Link to={`/update/${admin._id}`}>Edit </Link>
        </button></th>
      <th scope="col"> <button type="button" class="  btn btn-danger" onClick={(e)=>{DelFn(admin._id)}}>
        Delete</button></th>

    
    </tr>
  </thead>
  
</table>








          </div>
        );
      })}
    </div>
  )
}

export default Adview