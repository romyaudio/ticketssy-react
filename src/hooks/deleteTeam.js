import {useState} from 'react';
import url from '../config/url'
import axios from 'axios'
axios.defaults.baseURL = url

const DeleteTeam = () => {
	
	const [detid,setDetid] = useState(null)

	if (detid) {
		setDetid(null)
				axios({
					method:'POST',
					url:'api/delete/team',
					params: {
                        id: detid
                        },
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