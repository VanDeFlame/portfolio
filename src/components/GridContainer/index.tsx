import React, { ReactNode } from 'react';
import './GridContainer.scss';
import { Slot } from '../Slot';

interface Props {
	children: ReactNode;
	columns: number;
	rows: number;
}

function GridContainer({ children, columns, rows }: Props) {
	const gridTemplateColumns = `repeat(${columns}, 1fr)`;
	const gridTemplateRows = `repeat(${rows}, 1fr)`;

	const childCount = React.Children.count(children);
	const emptySlots: ReactNode[] = [];
	const remainingSlots = (rows * columns) - childCount;

	for (let i = 0; i < remainingSlots; i++) {
		emptySlots.push(<Slot key={i} />);
	}

	return (
		<div
			className='GridContainer'
			style={{ gridTemplateColumns, gridTemplateRows }}
		>
			{children}
			{emptySlots}
		</div>
	);
}

export { GridContainer };
