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
        error: null,
        isLoaded:false
        
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
            if (json.isEmpty == "You must complete all fields!") {
                this.setState({ 
                items: json.isEmpty,
                isLoaded:true,
                 
             })
            }
             
                

            
 
            // this.props.history.push('/')

    	}catch(error){
          this.setState({
           error,
           isLoaded:true
          });
    	}

    }

    render(){
    	const {error,isLoaded,items,form}= this.state
        if (error) {
            return <div>Error: {error.message}</div>
        }else if(!isLoaded) {
            //return <div>Loading...</div>;
        }else{
            return(
                 <ul>
          {items}
        </ul>
                )
        }
  
    	return(
            
            <div>
    		<FormAccount
    		form={this.state.form}
    		onChange={this.handleChange}
    		onSubmit={this.handleSubmit}
    		/>

            </div>
    		)
    }

}
export default newAccountContaine