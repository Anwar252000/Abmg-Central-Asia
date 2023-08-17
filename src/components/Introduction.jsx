import React from 'react';

const Introduction = () => {
	return (
		<>
			<div className='m-4 p-2 d-flex flex-column flex-md-row align-items-center'>
				<div className='section__title-wrapper text-center w-50 m-1 card'>
					<i className='fa fa-eye pt-3' style={{ fontSize: 40 }}></i>
					<div className='section__title my-3'>
						<h2>VISION</h2>
					</div>
					<p>
						VISION To empower our clients and build a better business
						environment with infinite possibilities
					</p>
				</div>
				<div className='section__title-wrapper text-center w-50 m-1 card px-4'>
					<i
						className='fas fa-bullseye-pointer pt-3'
						style={{ fontSize: 40 }}
					></i>
					<div className='section__title my-3'>
						<h2>MISSION</h2>
					</div>
					<p>
						To be renown and recognized in business consultancy for Malaysia and
						Global market.
						<br /> To provide best service satisfaction to clients with
						professional ethic.
						<br /> To be the best working partner for our clients in their
						business journey.
					</p>
				</div>
				<div className='section__title-wrapper text-center w-50 m-1 card '>
					<i class='fas fa-bullhorn pt-3' style={{ fontSize: 40 }}></i>
					<div className='section__title my-3'>
						<h2>MOTTO</h2>
					</div>
					<p>SUSTAIN, GROW, CAPITALIZE</p>
				</div>
			</div>
		</>
	);
};

export default Introduction;
