import React, { Component } from 'react';

class FutsalItem extends Component {
	
	render() {
		let futsalItem = {
			id:this.props.futsal[0],
			name:this.props.futsal[1],
			location:this.props.futsal[2],
			phone:this.props.futsal[3],
			openhours:this.props.futsal[4],
			coordinates:this.props.futsal[5],
			rate:this.props.futsal[6]
		}
		return (
			<div className="FutsalItem">
				<div className="elem">
					<p className="name">{futsalItem.name}</p>
					<p className="location">Address : {futsalItem.location}</p>
					<p className="phone">Phone : {futsalItem.phone}</p>
					<p className="openhours">Open Hours : {futsalItem.openhours}</p>
					<p className="rate">Rate : Rs {futsalItem.rate}/hr</p>
				</div>
			</div>
			);
	}
}

export default FutsalItem;
