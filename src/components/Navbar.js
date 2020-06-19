import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../index.css';
import logo from '../static/logo.svg';
import avatar from '../static/images/avatar.png';
import Home from '../Home';
import Interface from '../Interface';

function Navbar() {
	return (
		<Router>
			<div class="antialiased h-screen">
				<nav className="w-full flex justify-around bg-gray-800 h-16 items-center relative lg:justify-start lg:bg-white lg:pl-64 lg:border-b-2 lg:border-gray-800 z-10">
					<div class="ham">
						<svg
							class="menu lg:hidden cursor-pointer"
							width="43"
							height="15"
							viewBox="0 0 43 23"
							fill="none"
							xmlns="https://www.w3.org/2000/svg"
						>
							<line y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="3" />
							<line y1="11.5" x2="43" y2="11.5" stroke="white" stroke-width="3" />
							<line y1="21.5" x2="43" y2="21.5" stroke="white" stroke-width="3" />
						</svg>
					</div>
					<div class="logo lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-64 lg:bg-gray-800 lg:flex lg:align-center lg:justify-center">
						<img src={logo} alt="logo" />
					</div>
					<div class="hidden lg:block lg:ml-6 lg:h-full lg:flex lg:items-center">
						<form method="GET">
							<div class="relative text-gray-600 focus-within:text-gray-400">
								<span class="absolute inset-y-0 left-0 flex items-center pl-2">
									<button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
										<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
									</button>
								</span>
								<input type="search" name="q" class="py-2 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 border border-gray-300 w-64" placeholder="Search..." autocomplete="off" />
							</div>
						</form>
					</div>
					<div className="user w-38 flex justify-center items-center lg:ml-auto lg:mr-6">
						<a href="" className="hidden md:block hidden lg:block">
							<i class="fa fa-bell stroke-current text-white lg:text-black" aria-hidden="true"></i>
						</a>
						<div class="flex justify-center items-center ml-3">
							<a href="">
								<img src={avatar} alt="avatar" class="rounded-full h-8 mr-2" />
							</a>
							<div class="flex flex-col hidden lg:block">
								<h5 class="text-sm">Pawel Kuna</h5>
								<p class="text-xs text-gray-500">UI Designer</p>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{// <Home />}
			<Switch>
				<Route exact path="/" components={Home} />
				<Route path="/interface" components={Interface} />
			</Switch>
		</Router>
	);
}

export default Navbar;