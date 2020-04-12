
import { useHistory } from "react-router-dom";

const Authorization =()=>{
  let history = useHistory()
  if (localStorage.getItem('token') === null) {
      history.push('login')
  }
	
	}
export default Authorization;