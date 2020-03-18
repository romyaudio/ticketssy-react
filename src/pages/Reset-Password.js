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
	}
	render(){
		const {form} = this.state
		return (
            <ResetPass
            onChange={this.hendleChange}
            form={form}/>

			)
	}
}
export default ResetPassword