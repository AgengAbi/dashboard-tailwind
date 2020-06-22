import React from 'react';
import '../index.css';
class Extra extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Extra'
		}
	}
	render() {
		return (
			<div className="main lg:ml-64 px-3 py-6 lg:px-6 bg-gray-100 h-screen overflow-y-auto">
				<p className="text-2xl font-bold">{this.state.title}</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		);
	}
}

export default Extra;