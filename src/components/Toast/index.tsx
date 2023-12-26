import React from 'react';
import './Toast.scss';
import { ToastProps } from '../../interfaces/ToastProps';

function Toast({ text, subtext, src }: ToastProps) {
	src = src ? src : '/assets/default/compass.webp';
	return (
		<div className='Toast'>
			<figure className='Toast-figure'>
				<img
					className='Toast-img'
					src={src}
					alt={`Image representative of ${text}`}
				/>
			</figure>
			<div className='Toast-text'>
				<span className='Toast-title'>{text}</span>
				{Boolean(subtext) && <span className='Toast-desc'>{subtext}</span>}
			</div>
		</div>
	);
}

export { Toast };
