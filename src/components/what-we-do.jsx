import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h1 className='component-heading'>OUR SERVICES</h1>
			<svg
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
				style={{ position: 'absolute', width: 300 }}
			>
				<path
					fill='#8A3FFC'
					d='M30.6,-35.2C39.1,-29.2,45.3,-19.1,54,-4.4C62.7,10.4,74.1,29.8,67,35.5C59.9,41.2,34.5,33,16.9,34.1C-0.8,35.2,-10.6,45.6,-16.3,43.9C-22.1,42.2,-23.8,28.5,-32.7,17C-41.6,5.5,-57.7,-3.7,-61.8,-16.2C-65.9,-28.7,-58.1,-44.3,-45.8,-49.6C-33.5,-55,-16.8,-50,-2.9,-46.5C11,-43.1,22,-41.2,30.6,-35.2Z'
					transform='translate(100 100)'
				/>
			</svg>
			<div className='container my-2 py-4'>
				<h2 className='heading' style={{ position: 'relative' }}>
					BUSINESS & ADMINISTRATIVE SERVICES
				</h2>
				<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
					<div className='col-sm-12 col-md-6'>
						<img src='img/intro/p2.png' className='img-fluid' alt='img' />
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
						<svg
							viewBox='0 0 200 200'
							xmlns='http://www.w3.org/2000/svg'
							style={{ position: 'absolute', width: 100 }}
						>
							<path
								fill='#8A3FFC'
								d='M42.9,-56.3C57.6,-48.5,72.8,-38.5,76.5,-25.3C80.2,-12.1,72.4,4.5,64.8,19C57.3,33.6,50,46.2,39.2,53.3C28.5,60.4,14.2,62.1,-1.5,64.1C-17.1,66.2,-34.3,68.5,-47.6,62.1C-60.9,55.8,-70.3,40.9,-71.8,25.8C-73.2,10.8,-66.6,-4.3,-62.2,-21C-57.8,-37.6,-55.7,-55.7,-45.8,-65.1C-35.8,-74.4,-17.9,-75,-1.9,-72.5C14.1,-69.9,28.3,-64.1,42.9,-56.3Z'
								transform='translate(100 100)'
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhatWeDo;
