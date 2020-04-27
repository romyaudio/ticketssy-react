import {
    useState
} from 'react';
import axios from 'axios'


const EditTeam = (setModalShow,setLoading,setServerErrors) => {
    const [valueTeam, setValueTeam] = useState([]);
    const [getid, setGetid] = useState(null)

    if (getid) {
        setLoading(true)
        setGetid(null)
        axios({
            method: 'GET',
            url: 'api/edit/team',
            params: {
                id: getid
            },
        }).then(res => {
            setValueTeam(res.data);
            setLoading(false)
            setModalShow(true)
        }).catch(error => {
            setServerErrors(true);
        });
    }
    return {
        valueTeam,
        setGetid,
        setValueTeam
    }
}
export default EditTeam