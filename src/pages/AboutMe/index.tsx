import React from 'react';
import './AboutMe.scss';
import { Languages } from '../../interfaces/Languages';
import { Toast } from '../../components/Toast';
import { useJsonReader } from '../../hooks/useJsonReader';
import { AboutMeData } from '../../interfaces/AboutMeData';
import { Settings } from '../../interfaces/Settings';

function AboutMe({ language, assetsFolder }: Settings) {
	const [data, setData] = React.useState<AboutMeData>({} as AboutMeData);
	const jsonReader = useJsonReader();

	React.useEffect(() => {
		jsonReader<Languages<AboutMeData>>('aboutme')
			.then(resp => resp[language])
			.then(resp => setData(resp))
			.catch(err => console.error(err));
	}, [language]);

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

			<div className='AboutMe-description'>{
				data.description?.map((line: string) => <p key={line}>{line}</p>)
			}</div>

			<div className='AboutMe-likes'>
				{(language === 'en') && 'Some things I like:'}
				{(language === 'es') && 'Algunas cosas que me gustan:'}
				<ul>{
					data.likes?.map((like: string) => <li key={like}>{like}</li>)
				}</ul>
			</div>
		</div>
	);
}

export default AboutMe;