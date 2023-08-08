import React from 'react';

const Introduction = () => {
	return (
		<>
			<div className='card shadow m-4 px-4'>
				<div
					className='section__title-wrapper text-center my-4 card'
					style={{
						backgroundColor: '#243673',
						boxShadow:
							'8px 0 15px -4px rgba(31, 73, 125, 0.8), -8px 0 8px -4px rgba(31, 73, 125, 0.8)',
					}}
				>
					<div className='section__title my-3'>
						<h2>VISION</h2>
					</div>
					<p className='text-light'>
						ISION To empower our clients and build a better business environment
						with infinite possibilities
					</p>
				</div>
				<div
					className='section__title-wrapper text-center my-4 card'
					style={{
						backgroundColor: '#243673',
						boxShadow:
							'8px 0 15px -4px rgba(31, 73, 125, 0.8), -8px 0 8px -4px rgba(31, 73, 125, 0.8)',
					}}
				>
					<div className='section__title my-3'>
						<h2>MISSION</h2>
					</div>
					<p className='text-light'>
						To be renown and recognized in business consultancy for Malaysia and
						Global market.
						<br /> To provide best service satisfaction to clients with
						professional ethic.
						<br /> To be the best working partner for our clients in their
						business journey.
					</p>
				</div>
				<div
					className='section__title-wrapper text-center my-4 card '
					style={{
						backgroundColor: '#243673',
						boxShadow:
							'8px 0 15px -4px rgba(31, 73, 125, 0.8), -8px 0 8px -4px rgba(31, 73, 125, 0.8)',
					}}
				>
					<div className='section__title my-3'>
						<h2>MOTTO</h2>
					</div>
					<p className='text-light'>SUSTAIN, GROW, CAPITALIZE</p>
				</div>
			</div>
		</>
	);
};

export default Introduction;
