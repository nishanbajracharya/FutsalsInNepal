import React, { Component } from 'react';

class Header extends Component {

	loadAddFutsalView(){
		this.props.loadView("addFutsal");
	}

	render() {
		return (
			<div className="Header">
				<div className="header-left"><a href="."><h1>Futsals In Nepal</h1></a></div>
				<div className="header-right hide">
					<button onClick={this.loadAddFutsalView.bind(this)}>Add a Futsal</button>
				</div>
			</div>
			);
	}
}

export default Header;
