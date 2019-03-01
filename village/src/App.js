import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((response) => {
				this.setState(() => ({ smurfs: response.data }));
			})
			.catch((err) => console.log(err));
	}

	addHandler = (event, newSmurf) => {
		event.preventDefault();
		axios
			.post('http://localhost:3333/smurfs', newSmurf)
			.then((response) => {
				this.setState({ smurfs: response.data });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
				<Route path="/smurf-form" render={(props) => <SmurfForm {...props} addHandler={this.addHandler} />} />
			</div>
		);
	}
}

export default App;
