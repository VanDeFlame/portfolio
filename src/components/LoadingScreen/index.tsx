import React from 'react';
import './LoadingScreen.scss';

function LoadingScreen() {
	return (
		<div className='LoadingScreen'>
			<h2 className='Title'>Loading</h2>
			<div className='LoadingScreen-dots'>
				<div className='dot'/>
				<div className='dot'/>
				<div className='dot'/>
			</div>
		</div>
	);
}

export { LoadingScreen };
