import React from 'react'
import FormLogin from '../components/form-Login'

class Login extends React.Component{
	state = {
		form:{
			email: 'romyaudio@hotmail.com',
			password: "malone32"
		},
		error:null
	}
	hendleChange = e =>{
     this.setState({
     	form: {
     	...this.state.form,
        [e.target.name]: e.target.value
       }
     })
	}
	hendleSubmit = e =>{
     e.preventDefault()

	}
	render(){
		const {form} = this.state
		return(
			<FormLogin
			form={form}
			onChange={this.hendleChange}
            onSubmit={this.hendleSubmit}
			/>
			)
	}
}
export default Login