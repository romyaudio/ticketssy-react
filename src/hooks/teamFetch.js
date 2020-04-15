import { useState,useEffect } from 'react';
import url from '../config/url'
import axios from 'axios'
axios.defaults.baseURL = url

const TeamFetch = () =>{

	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [getTeams, setGetTeams] = useState(false)

	useEffect(()=>{
		setGetTeams(false)
		let iduser = localStorage.getItem('iduser')
		axios({
			method:'GET',
			url:'api/list/teams',
			params: {
                        iduser: iduser
                        },
		})

		.then(res =>{
          setData(res.data);
          
		})

		.catch(error =>{
			setError(true);
			
		});

	},[getTeams]);

	return {data,setGetTeams,error}

}
export default TeamFetch