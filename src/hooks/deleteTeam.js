import {useState} from 'react';
import url from '../config/url'
import axios from 'axios'
axios.defaults.baseURL = url

const DeleteTeam = () => {
	//const [valueTeam , setValueTeam] = useState([]);
	const [detid,setDetid] = useState(null)

	if (detid) {
		setDetid(null)
		let token = localStorage.getItem('token');
				axios({
					method:'POST',
					url:'delete/team',
					params: {
                        id: detid
                        },
					headers:{
						Authorization: `Bearer ${token}`
					}
				})

				.then(res =>{
					//setDetid(null);
				})

				.catch(error =>{
					//setError(true);
					
				});
	}		
	

return {setDetid,detid}
}
export default DeleteTeam