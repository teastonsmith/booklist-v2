import React from 'react';

export default function Header() {
	return (
		<header style={headerStyle}>
			<h1>Reading List Generator</h1>
		</header>
	);
}

const headerStyle = {
	background: '#333',
	backgroundColor: 'rgba(0, 0, 0, 0.75)',
	color: '#fff',
	textAlign: 'center',
	position: 'fixed',
	width: '100%',
	height: '50px',
	paddingTop: '10px',
	top: 0,
};
