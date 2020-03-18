import React from 'react'
import FormLogin from '../components/form-Login'
import axios from 'axios'
import Loading from '../components/Loading'
axios.defaults.baseURL = 'http://localhost:8000'

class Login extends React.Component{
	state = {
		form:{
			email: 'romyaudio@hotmail.com',
			password: "malone32"
		},
		error:null,
        loading:false
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
     this.setState({
        loading:true
     })
       e.preventDefault()
       axios.post('/api/login',{
           email:this.state.form.email,
           password:this.state.form.password
       })
       .then(response =>{
        this.setState({
            loading:false
        })
          localStorage.setItem('token' , response.data)
          this.props.history.push('dashboard')
      })

       .catch(error =>{
        localStorage.setItem('token' , '')
    })

   }
   render(){
      const {form,loading} = this.state
      if (loading) {
        return <Loading />
      }
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