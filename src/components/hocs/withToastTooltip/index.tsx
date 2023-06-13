import React from 'react';
import './ToastTooltip.scss';
import { ToastProps } from '../../../interfaces/ToastProps';
import { Toast } from '../../Toast';

const withToastTooltip = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<P & ToastProps> => {
	const WithToastTooltip: React.FC<P & ToastProps> = ({ ...props }) => {
		return (
			<div className="ToastTooltip">
				<Component {...props as P} />
				<Toast text={props.text} subtext={props.subtext} src={props.src}/>
			</div>
		);
	};

	return WithToastTooltip;
};

export { withToastTooltip };