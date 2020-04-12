import { useState,useEffect } from 'react'
import axios from 'axios'
import url from '../config/url'
//import { useHistory } from "react-router-dom";

axios.defaults.baseURL = url

const BusFetch = () => {
	//let history = useHistory()

	 const [data,setData] = useState(null)
     const [err,setErr] = useState(false)

    useEffect(() => {

    let token = localStorage.getItem("token")
        axios({
	        method: 'get',
	        url: '/user',
	        headers:{
	        Authorization:`Bearer ${token}`,
	        }
        })
          .then(response =>{
          setData(response.data.business)
        
        })

        .catch(error=>{
         localStorage.clear()
         setErr(true) 
         //history.push('login');
        
        })

   },[])

    return { data, err }
   

}
export default BusFetch