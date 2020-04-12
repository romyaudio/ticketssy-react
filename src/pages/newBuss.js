import React from 'react'
import FormBusiness from '../components/form-buss'
import axios from 'axios'
import url from '../config/url'
import Loading from '../components/Loading'

axios.defaults.baseURL = url

class newBuss extends React.Component {
	state={
		form:{
			name:'',
			email:'',
			phone:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			website:'',
			iduser:localStorage.getItem('iduser'),
		},

		states:[],
		errors:[],
		loading:false
	}

 componentDidMount() {
  let token = localStorage.getItem("token")
  axios({
   method: 'get',
   url: '/states',
   headers:{
    Authorization:`Bearer ${token}`,
  }
})
  .then(response =>{
  	this.setState({
  		states:response.data
  	})
  })
}

hendleChange = e => {
	this.setState({
		form:{
			...this.state.form,
			[e.target.name]:e.target.value
		}
	})

}

hendleSubmit = async e =>{
	e.preventDefault()
	this.setState({
		loading:true
	})
	try{
		let config = {
                method: 'POST'
                , headers: {
                    'Accept': 'application/json'
                    , 'Content-Type': 'application/json'
                }
                , body: JSON.stringify(this.state.form)
            }
          let res = await fetch(`${url}/create/business`,config)
          let json = await res.json()

          if (res.status === 201) {
            localStorage.setItem('business',json.name)
          	this.props.history.push('/dashboard')

          }else if(res.status === 422){
             this.setState({
             	errors:json.errors,
             	loading:false
             })
          }

	}catch(error){

	}
}
    render() {
    	const {form,states,errors,loading} = this.state

    	if (loading) {
    		return <Loading/>
    	}

        return (
            <div>
              <FormBusiness
              onChange={this.hendleChange}
              onSubmit={this.hendleSubmit}
              form={form}
              states={states}
              errors={errors}/>
            </div>
        )
    }
}
export default newBuss
