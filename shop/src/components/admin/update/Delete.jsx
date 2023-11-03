import React from 'react'

function Delete() {
  return (
    <div>
     <section>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center"> product</h2>
                    <form >
                        <label For="">Name</label>
                        <input type="text" name='name' className='form-control' /> 

                       
                        
                        
                        <button type="submit" class="btn btn-success">Delete</button>
                        
                    </form>
                </div>
            </div>

        </div>
      </section>


    </div>
  )
}

export default Delete