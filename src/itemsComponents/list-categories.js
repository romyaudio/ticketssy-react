import React from 'react';
import Table from 'react-bootstrap/Table';
import Loading from '../components/Loading';
import '../styles/list-categories.css'

const ListCategories = ({
	categoryData,
	handleClick,
	handleCloseListCategories,
	handleCatgShow,
    handleGetid,
    loading}) => {


	return (
		<>
		
      <div className="container">
        {loading ? <Loading/> : <span></span>}
        <p className="lead float-right text-info font-weight-bold list-catg"
           onClick={handleCloseListCategories}>List Items</p>
        <span><p className="lead float-right text-info font-weight-bold list-catg mr-3"
           onClick={handleCatgShow}>Add a Category</p></span>
		<Table hover responsive>
		<span></span>
		  <thead>
		    <tr>
		      <th>Name</th>
		    </tr>
		  </thead>
		  <tbody>
		      {categoryData.map((item)=>
		      	<tr key={item.id} onClick={handleGetid} >
		      	 <td data-item={item.id}>{item.name}</td>
		       </tr>)}
		  </tbody>
        </Table>
       </div>
       </>
		);
	}
 
export default ListCategories;