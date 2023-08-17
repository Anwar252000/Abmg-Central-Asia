import React from 'react';

const WhoWeAre = () => {
	return (
		<>
			<div>
				<h1 className='component-heading'>OUR SERVICES</h1>
				<svg
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', width: '20%' }}
				>
					<path
						fill='#8A3FFC'
						d='M53.4,-36.4C62.6,-31,59.1,-9.2,52.3,8.6C45.6,26.3,35.7,39.9,21,49C6.4,58.1,-13,62.7,-24.7,55.5C-36.5,48.3,-40.5,29.2,-47,8.5C-53.4,-12.1,-62.3,-34.4,-54.9,-39.4C-47.4,-44.4,-23.7,-32.1,-0.8,-31.4C22.1,-30.8,44.2,-41.8,53.4,-36.4Z'
						transform='translate(100 100)'
					/>
				</svg>
				<div className='container my-2 py-4' style={{ position: 'relative' }}>
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
