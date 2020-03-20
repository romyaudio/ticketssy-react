import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import './styles/header.css'

function Header({onClick,buss}) {
	return(
		<div className="container-fluid">
		<Link onClick={onClick} className="logout">Logout</Link>
		<Link className="logout">{buss}</Link>
		  <div className="container">
		    <div className="row">
             <div className="logo">
               <Link to="dashboard">
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