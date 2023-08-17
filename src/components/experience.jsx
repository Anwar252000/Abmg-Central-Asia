import React from 'react';

const Experience = () => {
	return (
		<>
			<h1 className='component-heading'>OUR SERVICES</h1>
			<div className='container my-2 py-4'>
				<h2 className='heading'>VISAS & OTHER SERVICES</h2>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='col-sm-12 col-md-6'>
						<img src='img/intro/whoweare.png' className='img-fluid' alt='img' />
					</div>
					<div className=' col-sm-12 col-md-6'>
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
