import React,{useState} from 'react'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import statesFetch from '../hooks/statesFetch'
import Error500 from '../components/Error500'
import { useForm } from 'react-hook-form'
import Loading from '../components/Loading'
import url from '../config/url'
import Nav from '../teamComponent/nav'
import '../styles/teamForm.css'
import teamFetch  from '../hooks/teamFetch';
import editTeam from '../hooks/editTeam'
import deleteTeam from '../hooks/deleteTeam'
import ListTeam from '../teamComponent/List-Team';


	const FormTeam = () => {
    
    const {states,err} = statesFetch();
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const [serverErrors, setServerErrors] = useState(false);
    const { data, setGetTeams } = teamFetch();
    const { register, handleSubmit, errors } = useForm();
    const {valueTeam ,setGetid, setValueTeam} = editTeam();
    const [edit , setEdit] = useState(false)
    const [idelete, setIdelete] = useState(null)
    const {setDetid,detid} = deleteTeam();


    const handleClose = () => {
      setModalShow(false);
      setValueTeam([])
      setError([]);
      setIdelete(null)
    }
    const handleShow = () =>{
      setValueTeam([]);
      setError([]);
      setEdit(false);
      setModalShow(true);
    } 

    const handleClick = (e) => {
       setEdit(true);
       setGetid(e.target.dataset.team)
       setIdelete(e.target.dataset.team)
       setModalShow(true)

    }

    const handleDelete = ()=>{
     if(window.confirm('Are you sure you want to delete this Team?')){
        setDetid(idelete);
     }
        if (detid === null ) {
           setModalShow(false);
           setValueTeam([]);
           setError([]);
           setIdelete(null);
           setGetTeams(true);
           //setDetid(null)

        }
    
   }
  
    const onSubmit = async data => { 
         setLoading(true)
      try{
        let uri = edit === false ? '/create/team' : '/update/team';
        let token = localStorage.getItem("token")
        let config = {
             method:'post',
             headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(data)
        }

        let res = await fetch(`${url}${uri}`,config)
        let json = await res.json()

        if ( res.status === 201 ) {
            setModalShow(false);
            setLoading(false);
            setGetTeams(true);
            setValueTeam([]);

          }else if( res.status === 422 ){
            setLoading(false);
            setError(json.errors);
          }else{
            setServerErrors(true);
            setLoading(false);
            setModalShow(false);
          }
          
      }catch(error){
        setLoading(false);
        setServerErrors(true);
        setModalShow(false);
      }
        

     }
     
        if (err) {
       return<Error500/>
      }else if(serverErrors){
       return<Error500/>
      }
   
  return (
    <>
    <Nav
    handleShow={handleShow} 
    />
    <span></span>
    <div>
       <ListTeam
        data={data}
        handleClick={handleClick} />
      </div>
    <Modal
      show={ modalShow }
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-lg"
      centered
      >
      <span>
      { loading === true ? <Loading/> : <div></div> }   
      </span>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
             {idelete ? 'Edit team' : 'Create an new Team' }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group controlId="formGridAddress1">
            <Form.Control type="hidden" name="iduser" value={localStorage.getItem('iduser')} ref={ register }/>
            <Form.Control type="hidden" name="idteam" value={valueTeam.id} ref={ register }/>
            <Form.Label>* Full name</Form.Label>
            <Form.Control 
            placeholder="Full name"
            ref={register({ required: true })}
            name="name"
            defaultValue={valueTeam.name} 
            />
            {errors.name && <span className="errors">This field is required</span>}
            {error.name && <span className="errors">{error.name}</span>}
          </Form.Group>

          <Form.Row>
            <Col sm>
             <Form.Label>* Email</Form.Label>
             <Form.Control type="email" 
             placeholder="Enter email"
             name="email"
             ref={register({ required: true })}
             defaultValue={valueTeam.email}/>
             {errors.email && <span className="errors">This field is required</span>}
             {error.email && <span className="errors">{error.email}</span>}
            </Col>

            <Col sm >
             <Form.Label>* Phone number</Form.Label>
             <Form.Control type="text" 
             placeholder="999-000-9999" 
             name="phone"
             ref={register({ required: true })}
             defaultValue={valueTeam.phone}/>
             {errors.phone && <span className="errors">This field is required</span>}
             {error.phone && <span className="errors">{error.phone}</span>}
            </Col>
           </Form.Row>

          <Form.Group >
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St"
             name="address"
              ref={ register }
             defaultValue={valueTeam.address}/>
          </Form.Group>
      
          <Form.Row>
            <Col sm >
              <Form.Label>City</Form.Label>
              <Form.Control 
              name="city"
              ref={ register }
              defaultValue={valueTeam.city}/>
            </Col>

            <Col sm >
              <Form.Label>State</Form.Label>
              <Form.Control as="select"
              name="state"
              ref={ register }>
                <option defaultValue={valueTeam.state}>{valueTeam.state || "Choose..."}</option>
                {states.map((state)=>
           <option value={state.name} key={state.id}>{state.name}</option>
           )}
              </Form.Control>
            </Col>

            <Col sm >
              <Form.Label>Zip</Form.Label>
              <Form.Control 
              name="zip"
              ref={ register }
              defaultValue={valueTeam.zipcode}/>
            </Col>
         </Form.Row>

        <Form.Group >
          <Form.Label>* Commission</Form.Label>
          <Form.Control type="number" placeholder="50%" 
             name="commission"
             ref={register({ required:true })}
             defaultValue={valueTeam.commission}/>
             {errors.commission && <span className="errors">This field is required</span>}
             {error.commission && <span className="errors">{error.email}</span>}
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="" onClick={handleClose}>Cancel</Button>
        <span>{idelete ? <Button onClick={handleDelete}  variant="danger" >Delete</Button> : <span></span>}</span>
        
      </Form>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
    </>
  );
  
}


export default FormTeam	