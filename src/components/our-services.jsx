import React from 'react';

const OurServices = () => {
	return (
		<>
			<div>
				<h1 className='component-heading'>OUR SERVICES</h1>
				<div className='container my-2 py-4'>
					<h2 className='heading'>TAILORED SERVICES</h2>
					<div className='d-flex justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6'>
							<p>
								We provide full range comprehensive statutory services to our
								client as part of their compliance with the authorities and
								government agencies.
							</p>
							<h4>Corporate Structure</h4>
							<p>
								Corporate planning, shareholder agreement, investor plan, etc
							</p>
							<h4>IT & Digitalization</h4>
							<p>ERP adaptation, HRM, CRM, VMS, accounting software, etc</p>
							<h4>Business Plan & IPO</h4>
							<p>Business plan, company valuation, IPO advisory, etc</p>
							<h4>Investment Portfolio</h4>
							<p>
								Investment portfolio, investor pool recommendation, wealth
								planning, etc
							</p>
						</div>
						<div className='col-sm-12 col-md-6'>
							<img
								src='img/intro/whoweare.png'
								className='img-fluid float-start'
								alt='Right-hand side image'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
