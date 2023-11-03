import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
     
     <header class="header">
		<h1 class="logo"><a >Snapmint</a></h1>
      <ul class="main-nav">
          <li><a >
            <Link to="/home"> Home</Link>
            </a></li>
          <li><a >
            <Link to="/view"> Products</Link>
            </a></li>
          <li><a ><Link to="/log"> Login</Link>
           
            </a></li>
          <li><a >
            <Link to="/account"> Account</Link>
           
            </a></li>
      </ul>
	</header> 
      
     




    </div>
  )
}

export default Nav