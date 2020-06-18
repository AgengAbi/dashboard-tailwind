import React from 'react';
import './index.css';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Home'
		}
	}
	render() {
		return (
			<div className="main mr-64 mt-16 px-3 py-6 lg:-x-6 bg-blue-500 z-10">
				<p className="text-2xl font-bold">{this.state.title}</p>
			</div>
		);
	}
}

export default Home;