import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h1 className='component-heading'>OUR SERVICES</h1>
			<div className='container my-2 py-4'>
				<h2 className='heading'>BUSINESS & ADMINISTRATIVE SERVICES</h2>
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
