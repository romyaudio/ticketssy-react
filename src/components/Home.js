import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
	<div>
		<div>
			<h1>Home</h1>
		</div>
		<Link to="create">Create an Account</Link>
		<br/>
		<Link to="login">Login</Link>

	</div>
)
export default Home