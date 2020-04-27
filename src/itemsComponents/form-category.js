import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from '../components/Loading'

const FormCategory = ({
  modalCatgShow,
  handleCatgClose,
  editCategory,
  handleCatgSubmit,
  handleChange,
  cForm,
  errorCatg,
  valueCategory,
  getidCatg,
  handleDeleteCategory,
  loading}) => {

    return(
     	<>
        <div>
        <Modal
         show={modalCatgShow}
         onHide={handleCatgClose}
         size="md"
         aria-labelledby="contained-modal-title-md"
         centered
         >
          <Modal.Header closeButton>
            {loading ? <Loading/> : <span></span> }
            <Modal.Title>
             {editCategory ? `Editing ${cForm.name} ` : "Create an New Category"} 
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleCatgSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control name="iduser" type="hidden" defaultValue={localStorage.getItem('iduser')}/>
                  <Form.Control name="idCatg" type="hidden" defaultValue={getidCatg}/>
                  <Form.Control
                   name="name"
                   type="text" 
                   placeholder="Category  name"
                   onChange={handleChange} 
                   value={cForm.name }
                   defaultValue={cForm.name}
                   />
                   {errorCatg.name && <span className="errors">{errorCatg.name}</span>}
                </Form.Group>

                <Modal.Footer>
                  <Button  variant="primary" type="submit">
                    Save
                  </Button>
                  <span>{editCategory ? <Button onClick={handleDeleteCategory}  variant="danger" >Delete</Button> : 
                  <span></span>}</span>
               </Modal.Footer>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
     </>
   )
}
export default FormCategory