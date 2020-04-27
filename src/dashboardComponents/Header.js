import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import '../styles/Header.css'
import axios from 'axios'
import url from '../config/url'
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
axios.defaults.baseURL = url

const Header = ({ buss }) => {

  let history = useHistory()
   const log = ({e}) =>{

      axios({
        method:'POST',
        url:'/logout',
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },

        })
  .then(response =>{
    localStorage.clear()
     return history.push('login')
     
     })

    .catch(error=>{
      localStorage.clear()
      return history.push('login')
    
     
  })
      
   }



   return(
    <>
      <div className="container-fluid contedor-header">
       <div className="container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar>
              <Link to="dashboard">
                <img
                  src={logo}
                  width="220"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Ticketssy logo"
                />
              </Link>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto menu">
                <Link to="dashboard">HOME</Link>
                <Link to="team">Team</Link>
                <Link to="item">Items</Link>
                <Link>Tickets</Link>
                <Link>Report</Link>
            </Nav>
        
            <Nav>
              <Link className="nav-link" to="#">{localStorage.getItem('business')}</Link>
              <Link className="nav-link" onClick={log}>Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       </div>
      </div>
		  
		</>
    )
}


export default Header
