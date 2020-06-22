import React from 'react';
import '../index.css';

class Forms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Forms'
		}
	}
	render() {
		return (
			<div className="main lg:ml-64 px-3 py-6 lg:px-6 bg-gray-100 h-screen overflow-y-auto">
				<p className="text-2xl font-bold">{this.state.title}</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsam beatae at explicabo quidem eveniet saepe rerum, alias corporis nam officiis recusandae sapiente illum quisquam expedita sunt ab unde magni aliquid est dolorum!.</p>
			</div>
		);
	}
}

export default Forms;