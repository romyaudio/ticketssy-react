import React from 'react'

const ConfirEmail = ({form}) =>(

	<div className="jumbotron">
	<div className="container p-3 bg-light">
	<h1 className="display-4">Congratulation!</h1>
	<p className="lead">Dear: {form.name}, your account was successfully created.</p>
	<hr className="my-4"/>
	<p>We have sent a link to your email. <strong>{form.email}</strong> To verify your email.</p>
	<a className="btn btn-primary btn-lg" href="login" role="button">Login</a>
	</div>
	</div>
	)
	export default ConfirEmail