import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

class Dashboard extends React.Component {

 state = {
  name:""
}
componentDidMount() {
  if (localStorage.getItem('token') === "") {
    this.props.history.push('login');
  }

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

  .catch(error=>{
    this.props.history.push('login');
    localStorage.setItem('token','')
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
  this.props.history.push('login');
  localStorage.setItem('token','')
})

 .catch(error=>{
  this.props.history.push('login');
  localStorage.setItem('token','')
})
}

render(){
 return(
  <div>
  <Header
  onClick={this.hendleClick}
  buss={this.state.name}
  />
  </div>

  )
}
}
export default Dashboard