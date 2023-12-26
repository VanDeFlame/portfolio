import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.scss';
import { TabLink } from '../../interfaces/TabLink';
import { ItemWithTooltip } from '../Item';

function Tabs({ name, item, url }: TabLink) {
	const target = url.startsWith('http') ? '_blank' : '_self';

	console.log(item);

	return (
		<NavLink
			to={url}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : ''}
			className='Tabs'
		>
			<ItemWithTooltip text={name} src={item} alt={name} />
		</NavLink>
	);
}

export { Tabs };
