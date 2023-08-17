import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h1 className='component-heading'>OUR SERVICES</h1>
			<svg
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
				style={{ position: 'absolute', width: '20%' }}
			>
				<path
					fill='#8A3FFC'
					d='M53.4,-36.4C62.6,-31,59.1,-9.2,52.3,8.6C45.6,26.3,35.7,39.9,21,49C6.4,58.1,-13,62.7,-24.7,55.5C-36.5,48.3,-40.5,29.2,-47,8.5C-53.4,-12.1,-62.3,-34.4,-54.9,-39.4C-47.4,-44.4,-23.7,-32.1,-0.8,-31.4C22.1,-30.8,44.2,-41.8,53.4,-36.4Z'
					transform='translate(100 100)'
				/>
			</svg>
			<div className='container my-2 py-4'>
				<h2 className='heading' style={{ position: 'relative' }}>
					BUSINESS & ADMINISTRATIVE SERVICES
				</h2>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='col-sm-12 col-md-6'>
						<img src='img/intro/whoweare.png' className='img-fluid' alt='img' />
					</div>
					<div className=' col-sm-12 col-md-6'>
						<p>
							We provide other business compliance services to our client as
							part of their outsource or professional guide that complies to the
							authorities and government agencies.
						</p>
						<h4>HR Advisory</h4>
						<p>HR management, payroll service, hiring etc</p>
						<h4>Business License</h4>
						<p>
							Local authorities business license, government agencies
							registration, etc
						</p>
						<h4>Legal/Contract Advisory</h4>
						<p>Contract drafting, corporate legal advisory, etc</p>
						<h4>Finance/Banking Advisory</h4>
						<p>Privilege banking arrangement, financing advisory, etc</p>
						<h4>General Insurance</h4>
						<p>Business related insurance</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhatWeDo;
