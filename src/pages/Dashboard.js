import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import ConDashboard from '../components/Dashboard'

class Dashboard extends React.Component {
     state = {
     	name:""
     }
     componentDidMount() {
     	let token = localStorage.getItem("token")
     	axios({
     		method: 'get',
     		url: '/api/user',
     		headers:{
     			Authorization:`Bearer ${token}`,
     		}
     	})
     	.then(response =>{
     		this.setState({
     			name: response.data.name
     		})
     	})


     }

		hendleClick = e =>{
			axios({
     		method: 'get',
     		url: '/api/logout',
     		headers:{
     			Authorization:`Bearer ${localStorage.getItem("token")}`,
     		}
     	})
			.then(response =>{
				console.log(response)
				this.props.history.push('login');
				localStorage.setItem('token','')
			})
		}



    render(){
    	return(
    		<div>
              <Header
              onClick={this.hendleClick}
              />
              <div>
              <ConDashboard
              token={this.state.name}/>
              </div>
            </div>

    		)
    }
}
export default Dashboard