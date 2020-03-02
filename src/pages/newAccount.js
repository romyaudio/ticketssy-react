import React from 'react'
import FormAccount from '../components/form-NewAccount'
import newAccount from '../new/newAccount'

class newAccountContaine extends React.Component{
	state = {
		form:{
			name: '',
			email: '',
			password: '',
			confiPassword: ''
		}
	}

	handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
            
        })
    }


	render(){
		return(
			<FormAccount
			form={this.state.form}
			onChange={this.handleChange}
			onSubmit={this.handleSubmit}
			/>
			)
	}

}
export default newAccountContaine