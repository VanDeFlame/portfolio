import React from 'react';
import './Item.scss';
import { withTooltip } from '../hocs/withTooltip';
import { withToastTooltip } from '../hocs/withToastTooltip';

interface Props {
	alt: string;
	src: string;
}

function Item({ alt, src }: Props) {
	return (
		<figure className='Item'>
			<img src={src} alt={alt} />
		</figure>
	);
}

const ItemWithTooltip = withTooltip<Props>(Item);
const ItemWithToast = withToastTooltip<Props>(Item);

export { ItemWithTooltip, ItemWithToast };
