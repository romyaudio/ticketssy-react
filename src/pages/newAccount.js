import React from 'react'
import NewAccount from '../new/newAccount'
import Loading from '../components/Loading'
import ConfirEmail from '../components/Confir-Email'

class newAccountContaine extends React.Component{
	state = {
		form:{
			name: '',
			email: '',
			password: '',
			confiPassword: ''
		},
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
           isLoaded: true
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
            if (json.response === "You must complete all fields!") {
                this.setState({ 
                empty: json.response,
                isLoaded:false   
             })
            }else if(json.response === "The password does not match!"){
                this.setState({
                    empty:json.response,
                    isLoaded:false
                })
            }else if(json.response === "This email is associated with an account!"){
                this.setState({
                    empty:json.response,
                    isLoaded:false
                })
            }else{
                this.setState({
                    successfully:'Account Create Successfully!',
                    isLoaded:false
                })
            }
             
    	}catch(error){
          this.setState({
           error,
          });
    	}

    }

    render(){
    	const {error,isLoaded,empty,form,successfully}= this.state
         if (isLoaded) {
           return <Loading />
         }

         if (successfully) {
            return <ConfirEmail
            form={form}

            />
         }
  
    	return(
            
            <div>
    		<NewAccount
    		form={this.state.form}
    		onChange={this.handleChange}
    		onSubmit={this.handleSubmit}
            empty={empty}
    		/>

            </div>
    		)
    }

}
export default newAccountContaine