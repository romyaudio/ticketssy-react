import {useState} from 'react';
import url from '../config/url'
import axios from 'axios'
axios.defaults.baseURL = url

const EditTeam = () => {
	const [valueTeam , setValueTeam] = useState([]);
	const [getid,setGetid] = useState(null)

	if (getid) {
		setGetid(null)
		let token = localStorage.getItem('token');
				axios({
					method:'GET',
					url:'edit/team',
					params: {
                        id: getid
                        },
					headers:{
						Authorization: `Bearer ${token}`
					}
				})

				.then(res =>{
					setValueTeam(res.data);
				})

				.catch(error =>{
					//setError(true);
					
				});
	}		
	

return {valueTeam,setGetid ,setValueTeam}
}
export default EditTeam