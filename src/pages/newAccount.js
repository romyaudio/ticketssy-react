import React from 'react'
import FormAccount from '../components/form-NewAccount'
import Loading from '../components/Loading'

class newAccountContaine extends React.Component{
	state = {
		form:{
			name: '',
			email: '',
			password: '',
			confiPassword: ''
		},

		loading: false,
        error: null
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
           loading: true
    	})
    	e.preventDefault()
    	try{
    		let config = {
    			method: 'POST',
    			headers:{
    				'Accept':'application/json',
                    'Content-Type':'application/json'
                  
    			},

    			body: JSON.stringify(this.state.form)
    		}

    		let res = await fetch('http://localhost:8000/create',config)
            let json = await res.json()

            this.setState({
            	loading: false
            })
            this.props.history.push('/')

    	}catch(error){

    	}

    }

    render(){
    	if (this.state.loading)
              return <Loading/>
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