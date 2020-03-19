import React from 'react'

import ResetPass from '../components/form-Reset-Password'

class ResetPassword extends React.Component{
	state = {
		form: {
			email:'',
		}
	}

	hendleChange = e =>{
		this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	hendleSubmit = async e =>{
		e.preventDefault()
		try{
			let config = {
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body: JSON.stringify(this.state.form)
			}

			let res = await fetch('http://localhost:8000/api/forgotpassword',config);
			let json = await res.json();
		}catch(error){

		}
	}
	render(){
		const {form} = this.state
		return (
            <ResetPass
            onChange={this.hendleChange}
            onSubmit={this.hendleSubmit}
            form={form}/>

			)
	}
}
export default ResetPassword