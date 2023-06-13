import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/index.tsx';
import { MobileAdvertence } from './components/MobileAdvertence/index.tsx';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<MobileAdvertence >
			<App />
		</MobileAdvertence>
	</React.StrictMode>
);