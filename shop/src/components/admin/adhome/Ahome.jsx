import React from 'react'
import './Adhome.css'
import { Link } from 'react-router-dom'

function Ahome() {
  return (
    <div>
         <div className="adminhome">
                  
                  <ul className="sidebar">
                  <li><span>Admin</span></li>
                   <li><span><i className="fa fa-home"></i></span><span>
                   <Link to='/adhome'> Home</Link>
                    </span></li>
                   <li><span><i className="fa fa-dashboard"></i></span><span>
                    <Link to="/bill">Billing details</Link>
                    </span></li>
                   <li><span><i className="fa fa-users"></i></span><span>
                    Users
                    </span></li>
                   <li><span><i className="fa fa-shopping-cart"></i></span><span>
                    <Link to="/adview">
                    Products
                    </Link>
                    </span></li>
                  
                   <li><span><i className="fa fa-bookmark"></i></span><span>
                    <Link to='/add'> Add product</Link>
                   
                    
                    </span></li>
                  
                   <li><span><i className="fa fa-gear"></i></span><span>
                    <Link to="/admin">
                    Logout
                    </Link>
                    </span></li>
                   
                   
                  </ul>
                  
                  <div className="content">
                     
                  </div>
          </div>
    </div>
  )
}

export default Ahome