import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import MyMarker from '../my-marker.png'
import FutsalMarker from '../futsal-marker.png'

class AddFutsal extends Component {

	constructor(){
		super();
		this.state = {
			lat: 0,
			lng: 0,
			name:"",
			address:"",
			phone:0,
			openhours:"",
			rate:""
		}
	}

	componentDidMount(){
		var width = ReactDOM.findDOMNode(this).offsetWidth;	
	}

	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true
		});
	}

	changeName(e){this.setState({name:e.target.value})}
	changePhone(e){this.setState({phone:e.target.value})}
	changeAddr(e){this.setState({address:e.target.value})}
	changeOpenHours(e){this.setState({openhours:e.target.value})}
	changeRate(e){this.setState({rate:e.target.value})}

	onClick(e) {
		console.log("Setting");
		this.setState({lat:e.latLng.lat(),lng:e.latLng.lng()})
	}

	onSubmitEvent(e){
		e.preventDefault();
		this.props.addFutsal(this.state);
	}

	render() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				this.setState({lat : position.coords.latitude,lng : position.coords.longitude});
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
		return (
			<div className="AddFutsal">
			<h1>Add Futsal</h1><br />
			<h3>Enter details about the futsal arena</h3><br />
			<div className="addFutsal-left">
			<label htmlFor="name">Name : </label>
			<input type="text" className="name" id="name" ref="name" onChange={this.changeName.bind(this)}/><br />
			<label htmlFor="phone">Phone : </label>
			<input type="text" className="phone" id="phone" ref="phone" onChange={this.changePhone.bind(this)}/><br />
			<label htmlFor="address">Address : </label>
			<input type="text" className="address" id="address" ref="address" onChange={this.changeAddr.bind(this)}/><br />
			<label htmlFor="openhours">Open Hours : </label>
			<input type="text" className="openhours" id="openhours" ref="openhours" onChange={this.changeOpenHours.bind(this)}/><br />
			<label htmlFor="rate">Rate : </label>
			<input type="text" className="rate" id="rate" ref="rate" onChange={this.changeRate.bind(this)}/> /hr<br /><br />
			<button type="submit" onClick={this.onSubmitEvent.bind(this)}>Submit</button>
			</div>
			<div className="addFutsal-right">
			<Gmaps
			width={this.width}
			height={'399px'}
			lat={this.state.lat}
			lng={this.state.lng}
			zoom={13}
			params={{v: '3.exp', key: 'AIzaSyAKhCotNypfZRmVhBia-2h0MS91U-0fXeQ'}}
			onMapCreated={this.onMapCreated}
			onClick={this.onClick.bind(this)} >
			<Marker
			lat={this.state.lat}
			lng={this.state.lng}
			draggable={false} 
			icon={MyMarker}
			title="You Are Here"/>
			</Gmaps>
			</div>
			</div>
			);
	}
}

export default AddFutsal;
