import React from 'react';
import teams from '../data/team';

const OurTeam = () => {
	return (
		<>
			<div className='m-3 p-3 rounded text-center'>
				<div className='section__title-wrapper text-center mb-40'>
					<div className='section__title mb-10'>
						<h2 className='bg-dark w-100 text-light'>Our Core Team</h2>
					</div>
					{/* <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div> */}
				</div>
				<div className='row'>
					<div className='teams my-4 mx-2 col-lg 3 col-md-3 col-sm-12 col-xs-12 w-100'>
						{teams.map((item, index) => {
							return (
								<div className='card m-2 shadow'>
									<div className='avatar'>
										<img
											className='rounded-circle w-25'
											src={item.img}
											alt=''
										/>
									</div>
									<div className='card-body'>
										<h3 className='card-title'>{item.name}</h3>
										<p className='card-text'>{item.info}</p>
										<p className='card-text'>{item.experience}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurTeam;
