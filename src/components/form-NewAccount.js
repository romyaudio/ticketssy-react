import React from 'react'

const formNewAccount = ({onChange,onSubmit,form}) =>(

	<div className="container">
	<form onSubmit={onSubmit}>
       
	<div className="form-group">
	<label>Full name</label>
	<input
	 type="text" 
	 className="form-control" 
	 name="name"
	 aria-describedby="emailHelp"
	 onChange={onChange}
	 value={form.name}
	 />
	</div>

	<div className="form-group">
	<label>Email address</label>
	<input
	 type="email" 
	 className="form-control" 
	 name="email" 
	 aria-describedby="emailHelp"
	 onChange={onChange}
	 value={form.email}
	 />
	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
	</div>

	<div className="form-group">
	<label>Password</label>
	<input
	 type="password" 
	 className="form-control"
	 name="password"
	 onChange={onChange}
	 value={form.password}
	 />
	</div>

	<div className="form-group">
	<label>Confir-Password</label>
	<input
	 type="password"
	 className="form-control"
	 name="confiPassword"
	 onChange={onChange}
	 value={form.confiPassword}
	 />
	</div>
	
	<button type="submit" className="btn btn-primary">Submit</button>

	</form>
	</div>

	)

	export default formNewAccount