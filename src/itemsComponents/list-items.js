import React from 'react';
import Table from 'react-bootstrap/Table';
import Loading from '../components/Loading'
import '../styles/list-categories.css'

const ListItems = ({data,handleClick,handleShowListCategories,loading}) => {

	const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      
    })


	return (
		<>
		
      <div className="container">
       {loading ? <Loading/> : <span></span>}
        <p className="lead float-right text-info font-weight-bold list-catg"
           onClick={handleShowListCategories}>List Categories</p>
		<Table hover responsive>
		  <thead>
		    <tr>
		      <th>Name</th>
		      <th>Category</th>
		      <th>Price</th>
		    </tr>
		  </thead>
		  <tbody>
		      {data.map((item)=>
		      	<tr key={item.id} onClick={handleClick} >
		      	 <td data-item={item.id}>{item.name}</td>
		      	 <td data-item={item.id}>{item.category}</td>
		      	 <td data-item={item.id}>{formatter.format(item.price)}</td>
		       </tr>)}
		  </tbody>
        </Table>
       </div>
       </>
		);
	}
 
export default ListItems;