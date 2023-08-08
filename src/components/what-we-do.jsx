import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h2 className='text-center mx-1 bg-dark text-light'>WHAT WE DO</h2>
			<div className='container my-2 py-4'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<img
							src='img/intro/whatwedo.jpg'
							className='img-fluid shadow rounded'
							alt='Right-hand side image'
						/>
					</div>
					<div className='col-sm-12 col-md-6'>
						<h4>We do things better</h4>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							We have a team with diverse qualifications like CPA, ACCA & CA.
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Creating CSV's, translation of Data for accurate bookkeeping
							(QuickBooks Online)
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Landlord statements reconciliation like App folio, Cooper, Newrez
							(Shellpoint)
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							QuickBooks Online, XERO & ZOHO Cleanup Bookkeeping
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Migration of Data from QB Desktop to QB Online
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Financial Statement Preparation and Analysis
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Bookkeeping including Invoicing and Collections
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Budgets and Financial Forecasting
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Bank and Credit Card Reconciliation
						</p>
						<p>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Reconciling Line of Credit.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhatWeDo;
