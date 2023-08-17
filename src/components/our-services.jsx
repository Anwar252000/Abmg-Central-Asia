import React from 'react';

const OurServices = () => {
	return (
		<>
			<div>
				<h1 className='component-heading' style={{ position: 'relative' }}>
					OUR SERVICES
				</h1>
				<svg
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', width: 300 }}
				>
					<path
						fill='#8A3FFC'
						d='M12.5,-22C18.4,-12.8,27.1,-12.2,29.8,-8.6C32.5,-5,29.1,1.7,31.5,15.1C33.9,28.6,42,48.7,37.7,47.8C33.4,46.8,16.7,24.7,1.8,22.2C-13.1,19.8,-26.2,37,-42,41.7C-57.7,46.3,-76,38.5,-76.5,27.2C-76.9,15.9,-59.5,1.1,-46.9,-8.3C-34.3,-17.7,-26.5,-21.8,-19.5,-30.6C-12.5,-39.5,-6.3,-53.2,-1.5,-51.1C3.2,-49,6.5,-31.2,12.5,-22Z'
						transform='translate(100 100)'
					/>
				</svg>
				<div className='container my-2 py-4' style={{ position: 'relative' }}>
					<h2 className='heading'>TAILORED SERVICES</h2>
					<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
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
								src='img/intro/p3.png'
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
