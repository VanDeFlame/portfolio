import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Jobs.scss';
import { useJsonReader } from '../../hooks/useJsonReader';
import { JobData } from '../../interfaces/JobData';

function Jobs() {
	const [jobs, setJobs] = React.useState<JobData[]>([]);
	const jsonReader = useJsonReader();
	const navigate = useNavigate();

	React.useEffect(() => {
		jsonReader<JobData[]>('jobs')
			.then((resp) => setJobs(resp))
			.catch((err) => console.error(err));
	}, [jsonReader]);

	const handleJobClick = (job: JobData) => {
		navigate(`/jobs/${job.company}`, {
			state: { job },
		});
	};

	return (
		<div className='Jobs'>
			<h2 className='Title'>Jobs</h2>
			<ul className='Jobs-list'>
				{jobs.map((job, index) => (
					<li
						key={index}
						className='Jobs-item'
						onClick={() => handleJobClick(job)}
					>
						<div className='Jobs-item-position'>{job.position}</div>
						<div className='Jobs-item-company'>{job.company}</div>
						<div className='Jobs-item-dateRange'>{`${job.startDate} - ${job.endDate}`}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Jobs;
