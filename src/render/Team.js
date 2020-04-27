import React,{useState} from 'react';
import Header from '../dashboardComponents/Header';
import Form from '../teamComponents/form-team';
import Nav from '../teamComponents/nav'
import Teams  from '../hooks/teams/teamFetch';
import ListTeam from '../teamComponents/List-Team';
import editTeam from '../hooks/teams/editTeam';
import Error500 from '../components/Error500'



const ContentTeam = () =>{
    
	  const [modalShow, setModalShow] = useState(false);
	  const [edit , setEdit] = useState(false)
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState(false);

	  const {valueTeam ,setGetid, setValueTeam} = editTeam(setModalShow,setLoading,setServerErrors);  
    const [idelete, setIdelete] = useState(null)
    const { data, setGetTeams } = Teams(setLoading,setServerErrors);
;

	const handleShow = () =>{
      setModalShow(true);
      setValueTeam([]);
      setError([]);
      setEdit(false);
    }

	const handleClose = () => {
      setModalShow(false);
      setValueTeam([])
      setError([]);
      setIdelete(null)  
    }
    
  	const handleClick = (e) => {
       setEdit(true);
       setGetid(e.target.dataset.team)
       setIdelete(e.target.dataset.team)
    }

    if (serverErrors) {
      return<Error500/>
    }

  return(
 <>
	  <div>
	    <Header/>
	  </div>

	  <div>
	  	<Nav
	  	handleShow={handleShow}/>
	  </div>

	  <div>
       <ListTeam
        data={data}
        handleClick={handleClick} 
        loading={loading}/>
      </div>

	  <div>
       <Form
       handleShow={handleShow}
       modalShow={modalShow}
       setModalShow={setModalShow}
       handleClose={handleClose}
       valueTeam={valueTeam}
       idelete={idelete}
       edit={edit}
       setValueTeam={setValueTeam}
       setIdelete={setIdelete}
       setGetTeams={setGetTeams}
       setError={setError}
       error={error}
       setServerErrors={setServerErrors}/>
      </div>
   </>
		
  )
}
export default ContentTeam