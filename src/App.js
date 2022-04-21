import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Sidebar from './components/Sidebar';

const App = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const openSidebar = () => {
		setSidebarOpen(true);
	};
  
	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	
	return(
		<div className = "container">
			<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
			<Main />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	);
}

export default App;
