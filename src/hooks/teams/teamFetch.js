import { useState} from 'react';
import axios from 'axios'

const TeamFetch = (setLoading,setServerErrors) =>{

	const [getTeams, setGetTeams] = useState(true)
    const [data, setData] = useState([]);

		if (getTeams) {
	     setLoading(true)
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
          setLoading(false)
		})

		.catch(error =>{
			setServerErrors(true);
			
		});
      }
    

	return {data,setGetTeams}

}
export default TeamFetch