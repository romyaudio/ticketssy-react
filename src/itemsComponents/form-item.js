import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import Loading from '../components/Loading'

const FormItem = ({
  modalShow,
  handleClose,
  edit,onSubmit,
  valueItem,
  error,
  handleDelete,
  handleCatgShow,
  categoryData,
  loading}) => {

  const {register, handleSubmit, errors} = useForm();


     return(
     	<>
      <div>
     <Modal
          show={ modalShow }
          onHide={handleClose}
          size="md"
          aria-labelledby="contained-modal-title-md"
          centered
            >
            <span>{loading ? <Loading/> : <span></span>}</span>
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {edit ? `Editing ${valueItem.name}` : 'Create an new Item' }
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="hidden" defaultValue={localStorage.getItem('iduser')}
                   name="iduser"
                   ref={ register }/>
                  <Form.Control type="hidden" defaultValue={valueItem.id}
                   name="iditem"
                   ref={ register }/>
                  <Form.Control
                   defaultValue={valueItem.name}
                   name="name"
                   type="text" 
                   placeholder="Item name"
                   ref={register({ required:true })} />
                   {errors.name && <span className="errors">This field is required</span>}
                   {error.name && <span className="errors">{error.name}</span>}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select"
                   name="category"
                   ref={ register }>
                    <option defaultValue={valueItem.category}>{valueItem.category ||  "None"}</option>
                    {categoryData.map((catagory)=>
                      <option key={catagory.id}>{catagory.name}</option>)}
                  </Form.Control>
                  <p className="lead list-catg text-info font-weight-bolder list-catg" onClick={handleCatgShow} >Add a Category</p>
                  
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" 
                   rows="3"
                   defaultValue={valueItem.description} 
                   placeholder="Item Description"
                   name="description"
                   ref={ register }/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text"
                   defaultValue={valueItem.price} 
                   placeholder="$0.00" 
                   name="price"
                   ref={ register}
                  />

                </Form.Group>

                <Modal.Footer>
                  <Button  variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                  <span>{edit ? <Button onClick={handleDelete}  variant="danger" >Delete</Button> : 
                  <span></span>}</span>
               </Modal.Footer>

              </Form>
            </Modal.Body>
        </Modal>
      </div>
     	  

      
     	</>
     	)
}
export default FormItem