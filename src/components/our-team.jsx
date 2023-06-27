import React from 'react';

const OurTeam = () => {
	return (
		<>
			<div className='m-3 p-3 rounded text-center'>
				<div className='section__title-wrapper text-center mb-40'>
					<div className='section__title mb-10'>
						<h2>Our Core Team</h2>
					</div>
					{/* <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div> */}
				</div>
				<div className='row'>
					<div className='teams my-4 mx-2 d-flex justify-content-center'>
						<div className='member border shadow mx-4 col-3 p-3'>
							<div className='avatar'>
								<img
									className='rounded-circle w-50'
									src='./img/team/p1.jpg'
									alt=''
								/>
							</div>
							<h3 className='my-2'>Syed Umair Anwar</h3>
							<p>
								Fellow Member of Association of Chartered Certified Accountants
							</p>
							<p>14 Years of Experience</p>
						</div>

						<div className='member border shadow mx-4 col-3 p-3'>
							<div className='avatar'>
								<img
									className='rounded-circle w-50'
									src='./img/team/p3.jpg'
									alt=''
								/>
							</div>
							<h3 className='my-2'>Salman Ahsan</h3>
							<p>CEO of Pak Premiere Education Consultancy</p>
						</div>
						<div className='member border shadow mx-4 col-3 p-3'>
							<div className='avatar'>
								<img
									className='rounded-circle w-50'
									src='./img/team/p2.jpg'
									alt=''
								/>
							</div>
							<h3 className='my-2'>Faizan Mustafa</h3>
							<p>
								MBA Australia, MPA Australia, Associate member of CPA Australia
							</p>
							<p>10 Years of Experience</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurTeam;
