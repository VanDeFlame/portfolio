import React, { ReactNode, useState } from 'react';
import './MobileAdvertence.scss';
import './../Inventory/Inventory.scss';

interface Props {
	children: ReactNode;
}

function MobileAdvertence({ children }: Props) {
	const [IgnoredAdvertence, setIgnoredAdvertence] = useState(false);
	const isMobile = window.innerWidth < 640;

	if (IgnoredAdvertence || !isMobile) return children;

	return (
		<div className='MobileAdvertence Inventory'>
			<h2>¡Small Screen!</h2>
			<p>
				This site is not intended for mobile devices. If you want to see my
				portfolio, I recommend you visit this other implementation.
			</p>
			<a
				className='Button'
				rel='noopener noreferrer'
				href='https://vandeflame.github.io/portfolio-mobile/'
			>
				Mobile portfolio
			</a>
			<button className='Button' onClick={() => setIgnoredAdvertence(true)}>
				See anyway
			</button>
		</div>
	);
}

export { MobileAdvertence };
