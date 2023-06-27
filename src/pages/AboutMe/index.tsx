import React from 'react';
import './AboutMe.scss';
import { Toast } from '../../components/Toast';
import { Settings } from '../../interfaces/Settings';
import { Profile } from '../../components/Profile';

function AboutMe({ language, assetsFolder }: Settings) {
	return (
		<div className='AboutMe'>
			<h2 className='Title'>About Me</h2>
			<ul className='AboutMe-effects'>
				<li><Toast text="Van de Flame" subtext="Alexis Jauge" src={assetsFolder + '/name_tag.webp'} /></li>
				<li>
					{(language === 'en') && <Toast text="20 y/o" subtext="August 27th" src={assetsFolder + '/cake.webp'} />}
					{(language === 'es') && <Toast text="20 años" subtext="27 de Agosto" src={assetsFolder + '/cake.webp'} />}
				</li>
				<li><Toast text="Argentina" subtext="Río Negro" src={assetsFolder + '/compass.webp'} /></li>
			</ul>

			<Profile lang={language} />
		</div>
	);
}

export default AboutMe;