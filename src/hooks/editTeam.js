import {useState} from 'react';
import url from '../config/url'
import axios from 'axios'
axios.defaults.baseURL = url

const EditTeam = () => {
	const [valueTeam , setValueTeam] = useState([]);
	const [getid,setGetid] = useState(null)

	if (getid) {
		setGetid(null)
				axios({
					method:'GET',
					url:'api/edit/team',
					params: {
                        id: getid
                        },
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