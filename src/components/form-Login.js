import React from 'react'
import { Link } from 'react-router-dom'
import './styles/form-login.css'
import logo from '../img/ticketssy-icon.png'


const FormLogin = ({ form, onChange, onSubmit, erro }) => (
   
	<>
    <div className="container cfl">
	  <div className="me">  
         <p key={erro.toString()}>{ erro.email || erro.password ||erro }</p>
	  </div>

	<div className="row justify-content-center">
	  <div className="col-md-5 border py-4">
	   <form  onSubmit={onSubmit}>
	    <div className="logofl">
	      <img src={logo} alt="logo"/>
	    </div>

		<div className="form-group">
			<label>Email address</label>
			<input type="email"
			className="form-control"
			name="email"
			onChange={onChange}
			value={form.email}/>
			<small key={erro.toString()}>{erro.email}</small>
		</div>

	<div className="form-group">
	<label>Password</label>
	<input type="password"
	className="form-control"
	name="password"
	onChange={onChange}
	value={form.password}/>
	<small key={erro.toString()}>{erro.password}</small>
	</div>

	<button type="submit" className="btn btn-primary">Submit</button>

	<div className="p-1">
	<Link to="reset/password">Forgot your Password</Link>
	<p>Don’t have a Square account? <Link to="create">Sign up</Link></p>
	</div>
	</form>
	</div>
	</div>
	</div> <
    />
)
export default FormLogin
