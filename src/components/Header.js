import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="header-left"><a href="/"><h1>Futsals In Nepal</h1></a></div>
				<div className="header-right hide">
					<button>Add a Futsal</button>
				</div>
			</div>
			);
	}
}

export default Header;
