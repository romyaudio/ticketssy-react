import React from 'react'

import ResetPass from '../homeComponents/form-Reset-Password'
import Loading from '../components/Loading'
import NewPassword from '../components/NewPassword'
import url from '../config/url'

class ResetPassword extends React.Component{
	state = {
		form: {
			email:'',
		},
		errors:[],
		loading:false
	}

	hendleChange = e =>{
		this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			},
			errors:[]
		})
	}

	hendleSubmit = async e =>{
		this.setState({
			loading:true
		})
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

			let res = await fetch(`${url}/reset/password`,config);
			let json = await res.json();

			if (res.status === 422) {
				this.setState({
					errors:json.errors,
					loading:false
				})
				localStorage.setItem('token', '');
			}else if(res.status === 201){
				this.setState({
					loading:false,
					successfully:true,
					email:json
				})
				localStorage.setItem('token', '')
			}

		}catch(error){
           localStorage.setItem('token', '');
		}
	}
	render(){
		const {form,errors,successfully,loading,email} = this.state

		if (successfully) {
			return <NewPassword
			email={email}/>
		}

		if (loading) {
			return <Loading/>
		}
		return (
            <ResetPass
            onChange={this.hendleChange}
            onSubmit={this.hendleSubmit}
            form={form}
            errors={errors}/>

			)
	}
}
export default ResetPassword