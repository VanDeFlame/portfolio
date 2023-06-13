import React, { lazy, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Inventory } from '../components/Inventory';
import { Tabs } from '../components/Tabs';
import { LoadingScreen } from '../components/LoadingScreen';
import { Settings } from '../interfaces/Settings';
import { TabLink } from '../interfaces/TabLink';

/* Pages imports */
const IndexList 				= lazy(() => import('../pages/IndexList'));
const GameMenu 					= lazy(() => import('../pages/GameMenu'));
const AboutMe 					= lazy(() => import('../pages/AboutMe'));
const Projects 					= lazy(() => import('../pages/Projects'));
const ProjectShowcase 	= lazy(() => import('../pages/ProjectShowcase'));
const Jobs 							= lazy(() => import('../pages/Jobs'));
const JobShowcase 			= lazy(() => import('../pages/JobShowcase'));
const Contact 					= lazy(() => import('../pages/Contact'));

function App() {
	const [settings, setSettings] = useState<Settings>({
		texturePack: false,
		language: 'en',
		assetsFolder: 'assets/default/'
	});

	const links: TabLink[] = [
		{ name: 'Search', 					item: settings.assetsFolder + 'compass.webp', 						url: '/' },
		{ name: 'About Me', 				item: settings.assetsFolder + 'head.webp', 								url: '/aboutme' },
		{ name: 'Projects', 				item: settings.assetsFolder + 'comparator.webp', 					url: '/projects' },
		{ name: 'Job Experience', 	item: settings.assetsFolder + 'experience_bottle.webp', 	url: '/jobs' },
		{ name: 'Contact', 					item: settings.assetsFolder + 'writable_book.webp', 			url: '/contact' },
		{ name: 'Curriculum Vitae', item: settings.assetsFolder + 'paper.webp', 							url: 'https://vandeflame.github.io/curriculum/' },
		{ name: 'Game Menu', 				item: settings.assetsFolder + 'knowledge_book.webp',			url: '/gamemenu' }
	];

	return (
		<HashRouter>
			<div className='App'>

				<header>
					<nav className='Navbar'>
						<Tabs {...links[2]} />
						<Tabs {...links[3]} />
					</nav>
					<nav className='Navbar Navbar_inverted'>
						<Tabs {...links[0]} />
						<Tabs {...links[6]} />
					</nav>
				</header>

				<Inventory>
					<main className='custom-scrollbar'>
						<React.Suspense fallback={<LoadingScreen/>}>
							<Routes>
								<Route index path='/' 				element={
									<IndexList pageLinks={links} />
								}/>
								<Route path='/gamemenu' 			element={
									<GameMenu settings={settings} setSettings={setSettings} />
								}/>
								<Route path='/aboutme' 				element={
									<AboutMe {...settings} />
								}/>
								<Route path='/contact' 				element={
									<Contact />
								}/>
								<Route path='/projects' 			element={
									<Projects {...settings} />
								}/>
								<Route path="/projects/:id" 	element={
									<ProjectShowcase {...settings} />
								}/>
								<Route path='/jobs' 					element={
									<Jobs />
								}/>
								<Route path='/jobs/:company'	element={
									<JobShowcase {...settings} />
								}/>
							</Routes>
						</React.Suspense>
					</main>
				</Inventory>

				<footer>
					<nav className='Navbar'>
						<Tabs {...links[4]} />
						<Tabs {...links[5]} />
					</nav>
					<nav className='Navbar Navbar_inverted'>
						<Tabs {...links[1]} />
					</nav>
				</footer>

			</div>
		</HashRouter>
	);
}

export { App };
