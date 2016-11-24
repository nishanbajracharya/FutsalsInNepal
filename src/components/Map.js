import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import MyMarker from '../my-marker.png'
import FutsalMarker from '../futsal-marker.png'

class Map extends Component {

	constructor(){
		super();
		this.state = {
			lat: 0,
			lng: 0
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

	render() {
		let futsalCoords = [];
		if(this.props.fc){
			for(var i in this.props.fc){
				var coor = this.props.fc[i][5].split(",");
				var title = this.props.fc[i][1];
				futsalCoords.push(<Marker lat={coor[0]} lng={coor[1]} draggable={false} icon={FutsalMarker} title={title}/>)
			}
		}
		console.log(futsalCoords)
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				this.setState({lat : position.coords.latitude,lng : position.coords.longitude});
			});
		} else {
			console.log("Geolocation is not supported by this browser.");
		}

		return (
			<div className="Map">
			<Gmaps
			width={this.width}
			height={'399px'}
			lat={this.state.lat}
			lng={this.state.lng}
			zoom={13}
			params={{v: '3.exp', key: 'AIzaSyAKhCotNypfZRmVhBia-2h0MS91U-0fXeQ'}}
			onMapCreated={this.onMapCreated}>
			<Marker
			lat={this.state.lat}
			lng={this.state.lng}
			draggable={false} 
			icon={MyMarker}
			title="You Are Here"/>
			{futsalCoords}
			<Circle
			lat={this.state.lat}
			lng={this.state.lng}
			radius={3000} 
			fillOpacity={0.05}
			strokeWeight={2}
			strokeColor='#49c'/>
			</Gmaps>
			</div>
			);
	}
}

export default Map;
