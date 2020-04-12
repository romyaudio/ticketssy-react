import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Home.css';
import logo from '../img/logo.png'

const Home = () => (
   <>
	<div className="container-fuid text-center p-3">
		<div className="container">
			<Link to="/" className="logo">
			<img src={logo} alt="logo"/>
			</Link>
		</div>
		</div>
		<div className="sbMH container">
		<nav className="nav">
  <Link className="nav-link" to="create">Create an Account</Link>
  <Link className="nav-link" to="login">Login</Link>
</nav>
		</div>

	
	</>
)
export default Home