import React from 'react';
import './Tabs.scss';
import { NavLink } from 'react-router-dom';
import { ItemWithTooltip } from '../Item';
import { TabLink } from '../../interfaces/TabLink';

function Tabs({ name, item, url }: TabLink) {
	const target = url.startsWith('http') ? '_blank' : '_self';

	return (
		<NavLink
			to={url}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : ''}
			className='Tabs'
		>
			<ItemWithTooltip
				text={name}
				src={item}
				alt={name}
			/>
		</NavLink>
	);
}

export { Tabs };
