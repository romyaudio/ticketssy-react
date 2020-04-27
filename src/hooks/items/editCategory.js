import { useState } from 'react';
import axios from 'axios'

const EditCategory = (setModalCatgShow,setLoding,setCform,setServerErrors) => {
    const [valueCategory, setValueCategory] = useState([]);
    const [getidCatg, setGetidCatg] = useState(null)

    if (getidCatg) {
        setLoding(true)
        setGetidCatg(null)
        axios({
            method: 'GET',
            url: 'api/edit/category',
            params: {
                id: getidCatg
            },
        }).then(res => {
            setLoding(false)
            setModalCatgShow(true)
            setCform({
                'iduser': localStorage.getItem('iduser'),
                'idCatg': getidCatg,
                'name': res.data.name,
            })
            
        }).catch(error => {
            setServerErrors(true);
        });
    }
    return { valueCategory,setGetidCatg,setValueCategory,getidCatg }
} 
export default EditCategory