import React from 'react';
import './Tooltip.scss';

interface WithTooltipProps {
  text: string;
}

const withTooltip = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<P & WithTooltipProps> => {

	const WithTooltip: React.FC<P & WithTooltipProps> = ({ text, ...props }) => {
		return (
			<div className="Tooltip">
				<Component {...props as P} />
				<span className="Tooltip-text">{text}</span>
			</div>
		);
	};

	return WithTooltip;
};

export { withTooltip };
