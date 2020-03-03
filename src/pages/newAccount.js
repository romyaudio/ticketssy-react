import React from 'react'
import FormAccount from '../components/form-NewAccount'

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
  
    handleSubmit = async e =>{
    	this.setState({

    	})
    	e.preventDefault()
    	try{
    		let config = {
    			method: 'POST',
    			header:{
    				'Accept':'application/json',
                    'Content-Type':'application/json',
                    'api_token':'04tk5QIjM8ohmdiqjvDmtxhqGCyXlTb2VXZkM9i1CYh0V9U4l8BLmWrru57F'
                  
    			},

    			boby: JSON.stringify(this.state.form)
    		}

    		let res = await fetch('http://54.157.254.30/create',config)
            let json = await res.json()

    	}catch(error){

    	}

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