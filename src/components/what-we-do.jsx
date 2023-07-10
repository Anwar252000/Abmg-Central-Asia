import React from 'react';

const WhatWeDo = () => {
	return (
		<>
			<h2 className='text-center mx-1 bg-dark text-light'>WHAT WE DO</h2>
			<div className='container my-2 py-4 bg-purple'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<img
							src='img/intro/whatwedo.jpg'
							className='img-fluid'
							alt='Right-hand side image'
						/>
					</div>
					<div className='col-sm-12 col-md-6'>
						<h4 className='text-light'>We do things better</h4>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							We have a team with diverse qualifications like CPA, ACCA & CA.
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Creating CSV's, translation of Data for accurate bookkeeping
							(QuickBooks Online)
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Landlord statements reconciliation like App folio, Cooper, Newrez
							(Shellpoint)
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							QuickBooks Online, XERO & ZOHO Cleanup Bookkeeping
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Migration of Data from QB Desktop to QB Online
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Financial Statement Preparation and Analysis
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Bookkeeping including Invoicing and Collections
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Budgets and Financial Forecasting
						</p>
						<p className='text-light'>
							<i className='fa fa-check px-2' aria-hidden='true'></i>
							Bank and Credit Card Reconciliation
						</p>
						<p className='text-light'>
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
