import React from 'react';

const Experience = () => {
	return (
		<>
			<h1 className='component-heading'>OUR SERVICES</h1>
			<div className='container my-2 py-4'>
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
				<h2 className='heading' style={{ position: 'relative' }}>
					VISAS & OTHER SERVICES
				</h2>
				<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
					<div className='col-sm-12 col-md-6'>
						<img src='img/intro/p4.gif' className='img-fluid' alt='img' />
					</div>
					<div className=' col-sm-12 col-md-6' style={{ position: 'relative' }}>
						<p>
							We provide one stop solution for foreign business client in
							investing and operating business in Malaysia
						</p>
						<h4>ESD/MM2H Visa</h4>
						<p>
							Expatriate visa for Director, Managers, Skill specialist of
							company, MM2H etc
						</p>
						<h4>Banking Facilities</h4>
						<p>Operating bank account for the company, etc</p>
						<h4>Office Premise</h4>
						<p>Co-working space rental, sourcing of rental office etc</p>
						<h4>Business Matching</h4>
						<p>Business portfolio matching, investment advisory, etc</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
