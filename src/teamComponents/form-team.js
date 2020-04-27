import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import statesFetch from '../hooks/statesFetch'
import { useForm } from 'react-hook-form'
import Loading from '../components/Loading'
import '../styles/teamForm.css'
import axios from 'axios'

	const FormTeam = ({
    modalShow,
    handleShow,
    setModalShow,
    handleClose,
    valueTeam,
    idelete,
    setIdelete,
    setDetid,
    edit,
    detid,
    setValueTeam,
    setGetTeams,
    setError,
    error,
    setServerErrors}) => {
    
    
     const [loading, setLoading] = useState(false);
     
     const { register, handleSubmit, errors } = useForm();
     const {states} = statesFetch(setServerErrors);


    const handleDelete = async ()=>{
     if(window.confirm('Are you sure you want to delete this Team?')){
         setLoading(true)
        await axios({
          method:'POST',
          url:'api/delete/team',
          params: {
                        id: idelete
                        },
        })

        .then(res =>{
         
          setModalShow(false);
           setValueTeam([]);
           setError([]);
           setGetTeams(true);
           setIdelete(null);
           setLoading(false)
        })

        .catch(error =>{
          setServerErrors(true);
          
        });

     }
      
    
   }
  
    const onSubmit = async data => { 
         setLoading(true)
      
        let uri = edit === false ? '/api/create/team' : '/api/update/team';

         await axios.post(`${uri}`,data)
          .then(res=>{
                setModalShow(false);
                setLoading(false);
                setGetTeams(true);
                setValueTeam([]);
                setError([]);

          })
          .catch(error=>{
            if (error.response.status === 422) {
              setLoading(false);
              setError(error.response.data.errors);
            }else{
              setServerErrors(true);
              setLoading(false);
              setModalShow(false);
            }
          })
     }
   
  return (
    <>
    <span>{}</span>
    <Modal
      show={ modalShow }
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-lg"
      centered
      >
      <span>
      { loading ? <Loading/> : <div></div> }   
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
        <Modal.Footer>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
         <Button variant="secondary" onClick={handleClose}>Cancel</Button>
         <span>{idelete ? <Button onClick={handleDelete}  variant="danger" >Delete</Button> : 
         <span></span>}</span>
      </Modal.Footer>
      </Form>
      </Modal.Body>  
    </Modal>
    </>
  );
  
}


export default FormTeam	