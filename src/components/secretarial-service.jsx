import React from 'react';

const SecretarialService = () => {
	return (
		<>
			<div>
				<h1 className='component-heading'>OUR SERVICES</h1>
				<div className='container my-2 py-4'>
					<h2 className='heading'>BACK OFFICE SUPPORT & SERVICES</h2>
					<div className='d-flex justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6'>
							<p>
								We providing back office services as it is important and even
								more so in some cases than the front office. Without a proper
								functioning foundation, your business cannot work to its full
								potential
							</p>
							<h4>Data Entry & Book Keeping</h4>
							<p>All kind of data entry related work etc</p>
							<h4>Document Drafting</h4>
							<p>Professional paper, statutory document, legal document etc</p>
							<h4>Digital Marketing</h4>
							<p>
								Digital Marketing, social media marketing, SEO, Email marketing
								etc
							</p>
							<h4>Payroll & Miscellaneous</h4>
							<p>
								HR payroll preparation, HR paymaster, administrative
								documentation, etc
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

export default SecretarialService;
