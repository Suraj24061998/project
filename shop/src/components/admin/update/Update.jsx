import React, { useState }from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Update() {
  const {id} = useParams()

    const [product, setProduct] = useState({
        name: "",
        price: "",
        id:id
      
      
      });
      const hch=(e)=>{
        if (e.target.name === "image") {
          const file = e.target.files[0];
          setProduct({ ...product, image: file });
        } else {
          setProduct({ ...product, [e.target.name]: e.target.value });
        }
        
    }
      const chgFn = (e) => {
        e.preventDefault();
        console.log("data before",product);
        axios.post('http://localhost:8080/update',product)

        .then((response)=>{
          console.log("Response Success",response)
          if(response.data.status===200){
            alert("product added")
            
          }
       }).catch((err)=>{
        console.log("Response Failed")
        console.log(err.data)
        alert(" faild")
       })
      };
  return (
    <div>
         <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">update product</h2>
                    <form  onSubmit={chgFn}>
                   <label For="">Name</label>
                        <input type="text" name='name' className='form-control' value={product.name} onChange={hch} /> 

                       
                        <label For="">price</label>
                        <input type="text" name='price' className='form-control' value={product.price} onChange={hch}/>
                        
                        <button type="submit" class="btn btn-success">Submit</button>
                        
                    </form>
                </div>
            </div>

        </div>
      </section>

    </div>
  )
}

export default Update