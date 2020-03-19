import React from 'react'

const ResetPassword = ({form,onChange,onSubmit,errors}) =>(
	<div className="container">
	<form onSubmit={onSubmit}>
    <div className="form-group">
    <label>Email address</label>
    <input type="email" 
    className="form-control" 
    name="email"
    value={form.email}
    onChange={onChange}/>
    <small>{errors.email}</small>

    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  
   <button type="submit" className="btn btn-primary">Submit</button>
   </form>


    
	</div>
	)
	export default ResetPassword