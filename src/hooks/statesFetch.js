import {useState, useEffect} from 'react'
import axios from 'axios'
import url from '../config/url'
axios.defaults.baseURL = url

const States = (setServerErrors) =>{
	const [states,setStates] = useState([])

	useEffect(()=>{
       let token = localStorage.getItem("token")
        axios({
	        method: 'get',
	        url: '/api/states',
	        headers:{
	        Authorization:`Bearer ${token}`,
	        }
        })

        .then(response =>{
          setStates(response.data)
        
        })

        .catch(error=>{
         setServerErrors(true) 
        })

	},[setServerErrors])
	return {states}

}
export default States