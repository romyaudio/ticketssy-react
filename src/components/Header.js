import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import './styles/header.css'

function Header() {
	return(
		<div className="container-fluid">
		  <div className="container">
		    <div className="row">
             <div className="logo">
               <Link to="/">
               	<img src={logo} alt={logo.name} />
               </Link>
             </div>
		    <div className="menu col-3">
                <Link>HOME</Link>
                <Link>Report</Link>
                <Link>Employees</Link>
                <Link>Items</Link>
                <Link>Tickets</Link>
		      </div>
		    	
		      </div>
		    </div>
		</div>
		)
}
export default Header