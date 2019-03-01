import React from 'react';

const Smurf = (props) => {
	const { id, name, age, height, deleteSmurf } = props;
	return (
		<div className="Smurf">
			<h3>{name}</h3>
			<p>{height} tall</p>
			<p>{age} smurf years old</p>
			<div className="Smurf-buttons">
				<button>Edit</button>
				<button onClick={() => deleteSmurf(id)}>Delete</button>
			</div>
		</div>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};

export default Smurf;
