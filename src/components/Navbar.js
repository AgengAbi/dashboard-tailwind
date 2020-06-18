import React from 'react';
import '../index.css';
import logo from '../static/logo.svg';
import avatar from '../static/images/avatar.png';

function Navbar() {
	return (
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
			{/* absolute top-0 left-0 just bug fixing*/}
			<div className="content w-full h-full flex absolute top-0 left-0">
				<div className="sidebar hidden lg:block w-64 h-full lg:bg-gray-800 overflow-y-hidden pt-16">
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Home</span>
					</a>
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Interface</span>
					</a>
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Forms</span>
					</a>
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Extra</span>
					</a>
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Layout</span>
					</a>
					<a class="flex items-center py-2 px-8 block bg-gray-800 hover:bg-gray-700 text-gray-100" href="#">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="mx-4 font-medium">Docs</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;