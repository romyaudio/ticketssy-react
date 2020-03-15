import React from 'react'

const FormLogin = ({form,onChange,onSubmit}) => (
	<div className="container">
	<form onSubmit={onSubmit}>
	<div className="form-group">
	<label>Email address</label>
	<input type="email"
	className="form-control"
	name="email"
	onChange={onChange}
	value={form.email}/>
	<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
	</div>
	<div className="form-group">
	<label>Password</label>
	<input type="password"
	className="form-control"
	name="password"
	onChange={onChange}
	value={form.password}/>
	</div>
	<div className="form-group form-check">
	<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
	<label className="form-check-label">Check me out</label>
	</div>
	<button type="submit" className="btn btn-primary">Submit</button>
	</form>
	</div>
	)
export default FormLogin