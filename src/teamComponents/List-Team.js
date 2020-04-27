import React from 'react';
import Table from 'react-bootstrap/Table';
import Loading from '../components/Loading'

const ListTeam = ({data,handleClick,loading}) => {


	return (
		<>
		
      <div className="container">
       <span>{loading ? <Loading/> : <span></span>}</span>
		<Table hover responsive>
		  <thead>
		    <tr>
		      <th> Name</th>
		      <th>Commission</th>
		    </tr>
		  </thead>
		  <tbody>
		      {data.map((team)=>
		      	<tr key={team.id} onClick={handleClick} >
		      	 <td data-team={team.id}>{team.name}</td>
		      	 <td data-team={team.id}>{team.commission}%</td>
		       </tr>)}
		  </tbody>
        </Table>
       </div>
       </>
		);
	}
 
export default ListTeam;