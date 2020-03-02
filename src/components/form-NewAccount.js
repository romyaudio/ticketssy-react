import React from 'react'

const formNewAccount = ({onChange,onSubmit,form}) =>(

	<div className="container">
	<form onSubmit={onSubmit}>
       
	<div className="form-group">
	<label for="exampleInputEmail1">Full name</label>
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
	<label for="exampleInputEmail1">Email address</label>
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
	<label for="exampleInputPassword1">Password</label>
	<input
	 type="password" 
	 className="form-control"
	 name="exampleInputPassword1"
	 onChange={onChange}
	 value={form.password}
	 />
	</div>

	<div className="form-group">
	<label for="exampleInputPassword1">Confi-Password</label>
	<input
	 type="password"
	 className="form-control"
	 name="exampleInputPassword1"
	 onChange={onChange}
	 value={form.confiPassword}
	 />
	</div>
	
	<button type="submit" className="btn btn-primary">Submit</button>

	</form>
	</div>

	)

	export default formNewAccount