import {useState} from 'react';
import axios from 'axios';

const FetchCategories = (setLoading,setServerErrors) => {
	const [categories , setCategories] = useState(true);
	const [categoryData , setCategoryData] = useState([]);

	if (categories) {
       setLoading(true)
       setCategories(false);
       let iduser = localStorage.getItem('iduser')

       axios({
       	    method: 'GET',
       	    url:'api/fetch/categories',
       	    params:{
       	    	iduser:iduser
       	    },
       	})

       .then(res=>{
       	setCategoryData(res.data)
        setLoading(false)
       })
       .catch(error=>{
         setServerErrors(true)
       })
    }

    return {categoryData,setCategories}

}
export default FetchCategories