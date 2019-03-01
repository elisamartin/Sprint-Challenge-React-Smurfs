import React, { Component } from 'react';

import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	deleteSmurf = (id) => {
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((response) => this.setState({ smurfs: response.data }))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.props.smurfs.map((smurf) => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
								deleteSmurf={this.deleteSmurf}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

Smurf.defaultProps = {
	smurfs: []
};

export default Smurfs;
