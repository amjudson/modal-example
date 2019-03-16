import React from 'react';
import Header from './components/common/Header';
import OpeningPage from './components/OpeningPage';
import Beginning from './components/beginning';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import '../src/css/styles.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<main className='main'>
					<Beginning />
				</main>
			</div>
		);
	}
}

export default App;
