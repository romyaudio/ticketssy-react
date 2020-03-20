import React from 'react'
import {Link} from 'react-router-dom'

const NewPassword = ({email}) =>(

	<div className="jumbotron">
	  <div className="container p-3 mb-2 bg-light">
		<h4 className="display-4">Reset Password!</h4>
			<p className="lead">We have sent a link to your email. <strong>{email}</strong> to reset your password.</p>
			 <hr clasNames="my-4"/>
			<p>When you have reset your password and create a new password. You can login on this button.</p>
		<Link className="btn btn-primary btn-md" to="/login" role="button">Login</Link>
	 </div>
	</div>
	)
	export default NewPassword