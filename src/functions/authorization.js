import { useHistory } from "react-router-dom";
import axios from 'axios'
//import url from '../config/url'

const Authorization =()=>{
  let history = useHistory()
  axios({
	        method: 'get',
	        url: '/api/user',
        })
          .then(res =>{
          	//localStorage.setItem('business',res.data.business)
        
        })

        .catch(error=>{
         localStorage.clear() 
         history.push('login');
        
        })
	
	}
export default Authorization;