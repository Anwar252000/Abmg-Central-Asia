import React from 'react';

const Introduction = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='row justify-content-center align-items-center'>
					<div className='col-md-4 px-2 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i className='fa fa-eye pt-3' style={{ fontSize: 40 }}></i>
							<div className='section__title my-3'>
								<h2>VISION</h2>
							</div>
							<p>
								VISION To empower our clients and build a better business
								environment with infinite possibilities
							</p>
						</div>
					</div>
					<div className='col-md-4 px-2 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i
								className='fas fa-bullseye-pointer pt-3'
								style={{ fontSize: 40 }}
							></i>
							<div className='section__title my-3'>
								<h2>MISSION</h2>
							</div>
							<p>
								To be renown and recognized in business consultancy for Malaysia
								and Global market.
								<br /> To provide best service satisfaction to clients with
								professional ethic.
								<br /> To be the best working partner for our clients in their
								business journey.
							</p>
						</div>
					</div>
					<div className='col-md-4 px-2 mb-4'>
						<div className='section__title-wrapper text-center card'>
							<i class='fas fa-bullhorn pt-3' style={{ fontSize: 40 }}></i>
							<div className='section__title my-3'>
								<h2>MOTTO</h2>
							</div>
							<p>SUSTAIN, GROW, CAPITALIZE</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Introduction;
