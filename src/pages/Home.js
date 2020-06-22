import React from 'react';
import '../index.css';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Home'
		}
	}
	render() {
		return (
			<div className="main lg:ml-64 px-3 py-6 lg:px-6 bg-gray-100 h-screen overflow-y-auto flex-wrap">
				<p className="text-2xl font-bold mb-2">{this.state.title}</p>

				<div className="flex flex-wrap front-card">
					<div className="w-full md:w-1/2 lg:w-3/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-auto px-3 py-3 mb-3">
							<div className="little-card-head flex">
								<p className="text-sm text-gray-700 uppercase font-semibold">sales</p>
								<p className="text-sm text-gray-700 uppercase ml-auto font-semibold">Last 7 days</p>
							</div>
							<p className="presentase font-bold text-2xl mb-2">75%</p>
							<div className="progres">
								<p className="text-xs mb-1">Conversion rate</p>
								<div className="h-2 rounded-lg bg-gray-300">
									<div className="h-full w-2/6 bg-blue-500 rounded-lg"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-3/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-auto px-3 py-3 mb-3">
							<div className="little-card-head flex">
								<p className="text-sm text-gray-700 uppercase font-semibold">sales</p>
								<p className="text-sm text-gray-700 uppercase ml-auto font-semibold">Last 7 days</p>
							</div>
							<p className="presentase font-bold text-2xl mb-2">75%</p>
							<div className="progres">
								<p className="text-xs mb-1">Conversion rate</p>
								<div className="h-2 rounded-lg bg-gray-300">
									<div className="h-full w-2/6 bg-blue-500 rounded-lg"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-3/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-auto px-3 py-3 mb-3">
							<div className="little-card-head flex">
								<p className="text-sm text-gray-700 uppercase font-semibold">sales</p>
								<p className="text-sm text-gray-700 uppercase ml-auto font-semibold">Last 7 days</p>
							</div>
							<p className="presentase font-bold text-2xl mb-2">75%</p>
							<div className="progres">
								<p className="text-xs mb-1">Conversion rate</p>
								<div className="h-2 rounded-lg bg-gray-300">
									<div className="h-full w-2/6 bg-blue-500 rounded-lg"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-3/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-auto px-3 py-3 mb-3">
							<div className="little-card-head flex">
								<p className="text-sm text-gray-700 uppercase font-semibold">sales</p>
								<p className="text-sm text-gray-700 uppercase ml-auto font-semibold">Last 7 days</p>
							</div>
							<p className="presentase font-bold text-2xl mb-2">75%</p>
							<div className="progres">
								<p className="text-xs mb-1">Conversion rate</p>
								<div className="h-2 rounded-lg bg-gray-300">
									<div className="h-full w-2/6 bg-blue-500 rounded-lg"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="static-world mt-3 flex flex-wrap">
					<div className="w-full md:w-7/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-64"></div>
					</div>
					<div className="w-full md:w-5/12 p-1">
						<div className="bg-white border border-gray-300 shadow-lg rounded-md h-64">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;