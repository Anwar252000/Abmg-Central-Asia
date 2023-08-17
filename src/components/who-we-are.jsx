import React from 'react';

const WhoWeAre = () => {
	return (
		<>
			<div>
				<h1 className='component-heading'>OUR SERVICES</h1>
				<div className='container my-2 py-4'>
					<h2 className='heading'>STATUTORY & COMPLIANCE SERVICES</h2>
					<div className='d-flex justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6'>
							<p>
								We provide full range comprehensive statutory services to our
								client as part of their compliance with the authorities and
								government agencies.
							</p>
							<h4>Company Secretary</h4>
							<p>
								Incorporation of company (local/foreign), co. secretary
								retainer, AGM/EGM, etc
							</p>
							<h4>Accounting</h4>
							<p>
								Annual/Monthly accounting, review, book keeping, advisory, etc
							</p>
							<h4>Taxation</h4>
							<p>
								Business/personal annual taxation, SST/GST, tax planning, tax
								audit, etc
							</p>
							<h4>Audit advisory</h4>
							<p>Internal audit, pre-audit advisory, etc</p>
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

export default WhoWeAre;
