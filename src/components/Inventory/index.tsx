import React, { ReactNode } from 'react';
import './Inventory.scss';

interface Props {
	children: ReactNode;
}

function Inventory({ children }: Props) {
	return (
		<div className='Inventory'>
			{children}
		</div>
	);
}

export { Inventory };
