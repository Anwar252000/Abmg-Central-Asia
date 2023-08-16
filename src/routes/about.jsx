import React from 'react';
import Breadcrumb from '../components/common/breadcrumb';

const About = () => {
	return (
		<>
			<Breadcrumb title={'About Us'} subtitle={'About Us'} />
			<div className='m-4 p-3 d-flex justify-content-center bg-dark-blue'>
				<div className='section__title-wrapper mb-40 col-8-lg col-10-md col-10-sm'>
					<h2 className='component-heading mb-4'>About Us</h2>
					<p>
						<strong>ABM GROUP</strong> is a comprehensive business management
						group consist of investment holding principal company Apex Business
						Management Group Sdn Bhd and its subsidiaries.
					</p>
					<p>
						Our group of company aim to provide solutions for business owner and
						investor in terms of sustainability, growth, and capitalization in
						their business venture and nurturing them from the formation stage.
					</p>
					<p>
						Our role is to support and help business owner to learn more about
						their business, providing aid to our customers by giving them the on
						time advice on their business vital and business compliances.
					</p>
					<p>
						Ultimately, we provide our customers strategy for long term growth
						and sustainability through capital market.
					</p>
					<div />
				</div>
			</div>
		</>
	);
};

export default About;
