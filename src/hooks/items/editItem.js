import { useState } from 'react';
import axios from 'axios'

const EditTeam = (setModalShow,setLoading,setServerErrors) => {
    const [valueItem, setValueItem] = useState([]);
    const [getid, setGetid] = useState(null)

    if (getid) {
        setLoading(true)
        setGetid(null)
        axios({
            method: 'GET',
            url: 'api/edit/item',
            params: {
                id: getid
            },
        }).then(res => {
            setValueItem(res.data);
            setLoading(false)
            setModalShow(true)
        }).catch(error => {
            setServerErrors(true);
        });
    }
    return { valueItem,setGetid,setValueItem }
} 
export default EditTeam