import React, { Component } from 'react';
import FutsalItem from './FutsalItem'

class Futsal extends Component {

	render() {
		let futsalItems = [];
		if(this.props.futsals){
			for(var i in this.props.futsals){
					futsalItems.push(<FutsalItem key={this.props.futsals[i][0]} futsal={this.props.futsals[i]}/>)
			}
		}
		return (
			<div className="Futsal">
				{futsalItems}
			</div>
			);
	}
}

export default Futsal;
