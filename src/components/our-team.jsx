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
					<div className='teams my-4 mx-2 col-lg 3 col-md-3 col-sm-12 col-xs-12 w-100'>
						<div className='card m-2 shadow'>
							<div className='avatar'>
								<img
									className='rounded-circle w-25'
									src='./img/team/p1.jpg'
									alt=''
								/>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Syed Umair Anwar</h3>
								<p className='card-text'>
									Fellow Member of Association of Chartered Certified
									Accountants
								</p>
								<p>14 Years of Experience</p>
							</div>
						</div>

						<div className='card m-2 shadow'>
							<div className='avatar'>
								<img
									className='rounded-circle w-25'
									src='./img/team/p3.jpg'
									alt=''
								/>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Salman Ahsan</h3>
								<p className='card-text'>
									CEO of Pak Premiere Education Consultancy
								</p>
							</div>
						</div>
						<div className='card m-2 shadow'>
							<div className='avatar'>
								<img
									className='rounded-circle w-25'
									src='./img/team/p2.jpg'
									alt=''
								/>
							</div>
							<div className='card-body'>
								<h3 className='card-title'>Faizan Mustafa</h3>
								<p className='card-text'>
									MBA Australia, MPA Australia, Associate member of CPA
									Australia
								</p>
								<p>10 Years of Experience</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurTeam;
