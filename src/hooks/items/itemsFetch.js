import {useState} from 'react';
import axios from 'axios';

const FetchCategories = (setLoading,setServerErrors) => {
	const [items , setItems] = useState(true);
	const [data , setData] = useState([]);

	if (items) {
       setLoading(true)
       setItems(false);
       let iduser = localStorage.getItem('iduser')

       axios({
       	    method: 'GET',
       	    url:'api/fetch/items',
       	    params:{
       	    	iduser:iduser
       	    },
       	})

       .then(res=>{
       	setData(res.data)
        setLoading(false)
       })
       .catch(error=>{
          setServerErrors(true)
       })
    }

    return {data,setItems}

}
export default FetchCategories