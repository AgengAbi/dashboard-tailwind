import React from 'react';
import '../index.css';
import Oops from '../static/images/oops.svg';

class Notfound extends React.Component {
	render() {
		return(
				<div className="main lg:ml-64 bg-gray-100 h-screen overflow-y-auto flex justify-center items-center flex-col">
					<img src={Oops} alt="oops!!!" className="w-64" />
					<p className="text-3xl font-bold">OOPS!!!</p>
				</div>
			)
	}
}

export default Notfound;