import React from 'react';
import './Contact.scss';
import { GridContainer } from '../../components/GridContainer';
import { Slot } from '../../components/Slot';
import { ItemWithToast } from '../../components/Item';

const socialMediaList = [
	{ column: 7, row: 1, name: 'Twitter', 		user: '@VanDeFlame', 	url: 'https://twitter.com/VanDeFlame' },
	{ column: 2, row: 2, name: 'Instagram', 	user: 'vandeflame', 	url: 'https://www.instagram.com/vandeflame/' },
	{ column: 4, row: 1, name: 'GitHub', 			user: 'VanDeFlame', 	url: 'https://github.com/VanDeFlame' },
	{ column: 9, row: 3, name: 'LinkedIn', 		user: 'vandeflame', 	url: 'https://www.linkedin.com/in/vandeflame/' },
	{ column: 4, row: 3, name: 'Discord', 		user: 'flamersher', 	url: 'https://discordapp.com/users/205191947810373632' }
];

function Contact() {
	return (
		<div className='Contact'>
			<h2 className='Title'>Social Media</h2>
			<p className='Contact-cta'>Contact me!</p>
			<GridContainer columns={9} rows={3}>
				{
					socialMediaList.map((socialMedia) => {
						return (
							<Slot key={socialMedia.name} row={socialMedia.row} column={socialMedia.column}>
								<a href={socialMedia.url} rel='noopener noreferrer' target='_blank'>
									<ItemWithToast
										text={socialMedia.name}
										subtext={socialMedia.user}
										alt={socialMedia.name}
										src={`assets/icons/${socialMedia.name.toLowerCase()}-icon.webp`}
									/>
								</a>
							</Slot>
						);
					})
				}
			</GridContainer>
			<GridContainer columns={9} rows={1}>
				<Slot row={1} column={1}>
					<a href='mailto:vandeflame@gmail.com?subject=Work' rel='noopener noreferrer' target='_blank'>
						<ItemWithToast
							text='Email'
							subtext='vandeflame@gmail.com'
							alt='Email'
							src='assets/icons/email-icon.webp'
						/>
					</a>
				</Slot>
			</GridContainer>
		</div>
	);
}

export default Contact;
