import React from 'react';
import { Link } from 'react-router-dom';
import './IndexList.scss';
import { TabLink } from '../../interfaces/TabLink';

interface Props {
	pageLinks: TabLink[];
}

function IndexList({ pageLinks }: Props) {
	return (
		<div className='IndexList'>
			<h2 className='Title'>Search</h2>
			<ul>
				{pageLinks
					.filter((page) => page.url !== '/')
					.map((page) => {
						const target = page.url.startsWith('http') ? '_blank' : '_self';
						return (
							<li key={page.url}>
								<Link
									target={target}
									rel={target === '_blank' ? 'noopener noreferrer' : ''}
									to={page.url}
								>
									{page.name}
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default IndexList;
