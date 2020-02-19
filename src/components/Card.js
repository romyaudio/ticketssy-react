import React from 'react';
import logo from '../img/ticketssy-logo.png';
import './styles/Card.css';


class Card extends React.Component {
	render(){
		return (
			<div>
				<div>
					<div>
						<img src={logo} alt={logo.name}/>
					</div>
					<div>
                        <a href="">HOME</a>
                        <a href="">Report</a>
                        <a href="">Employees</a>
                        <a href="">Items</a>
                        <a href="">Tickets</a>
					</div>
				</div>
			</div>)
	}
}
export default Card