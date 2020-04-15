import {useState, useEffect} from 'react'
import axios from 'axios'
import url from '../config/url'
axios.defaults.baseURL = url

const States = () =>{
	const [states,setStates] = useState([])
	const [err,setErr] = useState(false)

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
         setErr(true) 
        })

	},[])
	return {states,err}

}
export default States