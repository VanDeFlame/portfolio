import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.scss';
import { GridContainer } from '../../components/GridContainer';
import { ShowcaseItem } from '../../components/ShowcaseItem';
import { Slot } from '../../components/Slot';
import { useJsonReader } from '../../hooks/useJsonReader';
import { ProjectData } from '../../interfaces/ProjectData';
import { Settings } from '../../interfaces/Settings';

function Projects({ language }: Settings) {
	const [projects, setProjects] = React.useState<ProjectData[]>([]);
	const jsonReader = useJsonReader();
	const navigate = useNavigate();
	const rows = Math.ceil(projects.length / 3);

	React.useEffect(() => {
		jsonReader<ProjectData[]>('projects')
			.then((resp) => setProjects(resp))
			.catch((err) => console.error(err));
	}, [jsonReader]);

	const handleProjectClick = (project: ProjectData) => {
		navigate(`/projects/${project.id}`, {
			state: { project },
		});
	};

	return (
		<div className='Projects'>
			<h2 className='Title'>Projects</h2>
			<GridContainer columns={3} rows={rows}>
				{projects.map((project) => (
					<Slot key={project.id}>
						<ShowcaseItem
							onClick={() => handleProjectClick(project)}
							text={project.title}
							subtext={project.short[language]}
							src={`assets/projects/${project.id}.webp`}
						/>
					</Slot>
				))}
			</GridContainer>
		</div>
	);
}

export default Projects;
