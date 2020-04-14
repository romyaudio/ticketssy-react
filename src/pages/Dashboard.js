import React from 'react'
import Header from '../dashboardComponents/Header'
import Err from '../components/Error500'
import busFetch from '../hooks/busFetch'
import Authorization from '../functions/authorization'


const Dashboard = ()=> {
Authorization()
    
    const { err } = busFetch()
    
    if (err) {
      return <Err/>
     }
     
   return <Header/>
  
     
       
  
  }

export default Dashboard
