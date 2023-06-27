import React from 'react';
import './GameMenu.scss';
import { Settings } from '../../interfaces/Settings';
import { Languages } from '../../interfaces/Languages';

interface Props {
	settings: Settings;
	setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

function GameMenu({ settings, setSettings }: Props) {
	const onHandleTexturePack = () => {
		const html: HTMLElement = document.documentElement;

		setSettings((prev) => {
			const newValue = !prev.texturePack;
			html.setAttribute('data-texture-pack', String(newValue));

			return ({
				...prev,
				texturePack: newValue,
				assetsFolder: 'assets/' + (newValue ? 'barebones/' : 'default/')
			});
		});
	};

	const onHandleLanguage = () => {
		const availableLangs = ['en', 'es'];

		setSettings((prev) => {
			const currentIndex = availableLangs.indexOf(prev.language);
			const nextIndex = (currentIndex + 1) % availableLangs.length;
			const newValue = availableLangs[nextIndex] as keyof Languages<any>;

			return ({
				...prev,
				language: newValue
			});
		});
	};

	return (
		<div className='GameMenu'>
			<h2 className='Title'>Game menu</h2>

			<button
				className='Button'
				onClick={onHandleLanguage}
			>Language: {settings.language.toLocaleUpperCase()}</button>
			<button
				className='Button'
				onClick={onHandleTexturePack}
			>Texture Pack: {(settings.texturePack) ? 'ON' : 'OFF'}</button>
			<a
				className='Button'
				target='_blank'
				rel='noopener noreferrer'
				href='https://vandeflame.github.io/portfolio-mobile/'
			>Mobile Version</a>
		</div>
	);
}

export default GameMenu;
