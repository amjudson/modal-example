import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OpeningPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name } = this.props;
		return (
			<div>
				<h3>Open up the page</h3>
        <h4>For {name}</h4>
			</div>
		);
	}
}

export default OpeningPage;
