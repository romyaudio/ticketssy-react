import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';
import logo from '../img/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Home = () => (
   <>

   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   
      <Link to="/" className="logo">
	    <img src={logo} alt="logo"/>
	  </Link>

     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">

        <Link className="nav-link" to="create">Create an Account</Link>
        <Link className="nav-link" to="login">Login</Link>
       </Nav>
       <Nav>

         

      </Nav>
    </Navbar.Collapse>
   </Navbar>
  </>
)
export default Home