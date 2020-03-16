import React from 'react'
import FormLogin from '../components/form-Login'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

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
    axios.post('/api/login',{
    	email:this.state.form.email,
    	password:this.state.form.password
    })
    .then(response =>{
    	console.log(response)
    })

    .catch(error =>{
    	console.log(error.message)
    })
     
     
     	
     		
     	

     

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