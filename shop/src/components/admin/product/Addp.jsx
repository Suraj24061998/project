import React, { useState } from 'react'
import axios from 'axios'
import './Addp.css'
import Ahome from '../adhome/Ahome';

function Addp() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
       categorey:"",
       description:"",
        image: null,
      
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
        axios.post('http://localhost:8080/add',product,{
          headers:{'Content-Type':'multipart/form-data'}
        })

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
      <Ahome/>
         <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">Add product</h2>
                    <form  onSubmit={chgFn}>
                        <label For="">Name</label>
                        <input type="text" name='name' className='form-control' value={product.name} onChange={hch} /> 

                        <label For="">Categorey</label>
                        <input type="text" name='categorey' className='form-control' value={product.categorey} onChange={hch} />
                        <label For="">Description</label>
                        <input type="text" name='description' className='form-control'value={product.description} onChange={hch} />
                        <label For="">price</label>
                        <input type="text" name='price' className='form-control' value={product.price} onChange={hch}/>
                        <label For="">image</label>
                        <input type="file" className='form-control' name="image"   onChange={hch}/>

                        <button type="submit" class="btn btn-success">Submit</button>
                        <button type="reset" class="btn btn-secondary">Reset</button>
                    </form>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Addp