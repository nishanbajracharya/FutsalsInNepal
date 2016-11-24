import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Futsal from './components/Futsal';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      futsals:[],
      fustalCoordinates:[]
    }
  }

  componentDidMount() {
    window.gapi.load('client', () => {
      let CLIENT_ID = '70955150255-sskh94i3574rq70m8c5km4fj1hgg6d3d.apps.googleusercontent.com';
      let SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
      window.gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES,
        'immediate': true
      }, ()=>{
        var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
        window.gapi.client.load(discoveryUrl).then(()=>{
          window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '12ucQPQna8Ih9UCPF5sdDHOCLNDxDKF_GDG8FYgbsmes',
            range: 'Sheet1',
            key:'AIzaSyAKhCotNypfZRmVhBia-2h0MS91U-0fXeQ'
          }).then((response) => {
            var res = JSON.parse(response.body);
            res.values.splice(0,1);
            this.getFutsals(res.values)
          },(err) => {
            console.log(err);
          })
        });
      });
    });
  }

  getFutsals(arr){
    console.log(arr);
    this.setState({futsals:arr});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Map fc={this.state.futsals}/>
      <Futsal futsals={this.state.futsals}/>
      </div>
      );
  }
}

export default App;
