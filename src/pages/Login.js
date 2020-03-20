import React from 'react'
import FormLogin from '../components/form-Login'
import Loading from '../components/Loading'
import FatalError from '../components/ErrorFatal'
import url from '../confi/url'
//import Dashboard from './Dashboard'

class Login extends React.Component{
	state = {
		form:{
			email: '',
			password: ""
		},
		errors:[],
        loading:false,
        errF:[]
	}
	hendleChange = e =>{
       this.setState({
          form: {
              ...this.state.form,
              [e.target.name]: e.target.value
          }
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
          let res = await fetch(`${url}/login`,config)
          let json = await res.json()

          if (res.status === 201) {
              this.setState({
                loading:false,
                //dashboard:true,
                errors:[]
              })

              localStorage.setItem('token',json)
              this.props.history.push('dashboard')

          }else if(res.status === 422){
            this.setState({
                loading:false,
                errors:json.errors
              })
            localStorage.setItem('token','')

          }else{
            this.setState({
              error:true,
              loading:false,
            })
          }
       }catch(error){

       }
//

   }
   render(){
      const {form,loading,errors,error} = this.state
      if (error) {
         return <FatalError/>
       }
      if (loading) {
        return <Loading />
      }
      return(
         <FormLogin
         form={form}
         onChange={this.hendleChange}
         onSubmit={this.hendleSubmit}
         errors={errors}
         />
         )
  }
}
export default Login