import React, { ReactNode } from 'react';
import './Slot.scss';

interface Props {
	column?: number;
	row?: number;
	children?: ReactNode;
}

function Slot({ column, row, children }: Props) {
	const gridArea = `${row} / ${column}`;

	return (
		<div className='Slot' style={row && column ? { gridArea } : {}}>
			{children}
		</div>
	);
}

export { Slot };
