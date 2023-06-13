import React from 'react';
import './JobShowcase.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { JobData } from '../../interfaces/JobData';
import { LoadingScreen } from '../../components/LoadingScreen';
import { Settings } from '../../interfaces/Settings';

function JobShowcase({ language }: Settings) {
	const location = useLocation();
	const navigate = useNavigate();
	const job: JobData = location.state?.job;

	const handleGoBack = () => {
		navigate(-1);
	};

	/* Return to jobs if you access through url */
	React.useEffect(() => {
		if (!job) {
			navigate('/jobs');
		}
	}, [navigate, job]);

	if (!job) {
		return <LoadingScreen />;
	}

	return (
		<div className="JobShowcase">
			<button
				className="JobShowcase-goback"
				onClick={handleGoBack}
			>&lt; back</button>
			<h2 className="Title">{job.company}</h2>
			<div className="JobShowcase-content">

				<div className="Book Book_inverted">
					<h3 className="JobShowcase-position">{job.position}</h3>
					<p className="JobShowcase-dateRange">
						{job.startDate} - {job.endDate}
					</p>
					<p>{job.info[language].description}</p>
				</div>

				<div className="Book">
					<div className='JobShowcase-info'>
						<p>
							Technologies:<br />
							{job.technologies}
						</p>
						<p>
							Responsibilities:<br />
							{job.info[language].responsibilities}
						</p>
						<p>
							Team:<br />
							{job.info[language].team}
						</p>
						{
							job.info[language].extraInformation &&
							<p>
								Extra Information:<br />
								{job.info[language].extraInformation}
							</p>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobShowcase;
