import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProjectShowcase.scss';
import { LoadingScreen } from '../../components/LoadingScreen';
import { ProjectData } from '../../interfaces/ProjectData';
import { Settings } from '../../interfaces/Settings';

function ProjectShowcase({ language }: Settings) {
	const location = useLocation();
	const navigate = useNavigate();
	const project: ProjectData = location.state?.project;

	const handleGoBack = () => {
		navigate(-1);
	};

	/* Return to projects if you access through url */
	React.useEffect(() => {
		if (!project) {
			navigate('/projects');
		}
	}, [navigate, project]);

	if (!project) {
		return <LoadingScreen />;
	}

	return (
		<div className='ProjectShowcase'>
			<button className='ProjectShowcase-goback' onClick={handleGoBack}>
				&lt; back
			</button>
			<h2 className='Title'>{project.title}</h2>
			<div className='ProjectShowcase-content'>
				<div className='Book Book_inverted'>
					<p>{project.description[language]}</p>
				</div>
				<div className='Book'>
					<p>
						Technologies:
						<br />
						{project.technologies}
					</p>

					<div className='ProjectShowcase-buttons'>
						{project.implementation && (
							<a
								className='Button'
								target='_blank'
								rel='noopener noreferrer'
								href={project.implementation}
							>
								View
							</a>
						)}
						{project.repository && (
							<a
								className='Button'
								target='_blank'
								rel='noopener noreferrer'
								href={project.repository}
							>
								Repository
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectShowcase;
