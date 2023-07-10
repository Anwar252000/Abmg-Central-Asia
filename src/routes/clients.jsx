import React from 'react';
import { Link } from 'react-router-dom';
import clients from '../data/clients';
import Breadcrumb from '../components/common/breadcrumb';

const Cleints = () => {
	return (
		<>
			<Breadcrumb title={'Our Clients'} subtitle={'Our Clients'} />
			<div className='container bg-dark-blue border px-4 my-4'>
				<div className='section__title-wrapper text-center mt-55 mb-25'>
					<div className='section__title'>
						<h2>Our Clients</h2>
					</div>
				</div>
				{clients.map((item, index) => {
					return (
						<div className='card shadow p-5 m-3 bg-green'>
							<div key={item.id}>
								<Link to={item.link} target='_blank'>
									{/* <img src={item.img} alt='client' /> */}
									<h4>{item.title}</h4>
								</Link>
								<p>
									<span>
										<b>Annual Turnover: </b>
									</span>
									${item.annualTurnover}
								</p>
								<p>
									<span>
										<b>Industry: </b>
									</span>
									{item.industry}
								</p>
								<p>
									<span>
										<b>About: </b>
									</span>
									{item.about}
								</p>
								<Link to={item.link} target='_blank'>
									<button className='os-btn os-btn-2'>More Info</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Cleints;
