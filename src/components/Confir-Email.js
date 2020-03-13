import React from 'react'

const ConfirEmail = ({form}) =>(

	<div className="jumbotron">
	<h1 className="display-4">Congratulation!</h1>
	<p className="lead">Dear: {form.name}, your account was successfully created.</p>
	<hr className="my-4"/>
	<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
	<a className="btn btn-primary btn-lg" href="#" role="button">Login</a>
	</div>
	)
	export default ConfirEmail