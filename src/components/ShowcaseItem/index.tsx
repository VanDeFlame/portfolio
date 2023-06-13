import React from 'react';
import './ShowcaseItem.scss';
import { withToastTooltip } from '../hocs/withToastTooltip';

interface Props {
	text: string;
	src: string;
	onClick: () => void;
}

function ShowcaseItem({ text, src, onClick }: Props) {
	return (
		<div className="ShowcaseItem" onClick={onClick}>
			<img src={src} alt={text} />
			<p>{text}</p>
		</div>
	);
}

const ShowcaseItemWithToastTooltip = withToastTooltip<Props>(ShowcaseItem);

export { ShowcaseItemWithToastTooltip as ShowcaseItem };
