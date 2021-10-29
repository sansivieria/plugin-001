import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: One,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Two,
		key: 'Home',
		path: '/home'
	},
	{
		Component: Three,
		key: 'About',
		path: '/about'
	},
	{
		Component: Four,
		key: 'App',
		path: '/'
	}
];

export default routes;
