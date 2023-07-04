import React from 'react';
import Breadcrumb from '../components/common/breadcrumb';

const Contact = () => {
	return (
		<>
			<div className='m-4 p-3 border rounded'>
				<Breadcrumb title={'Contact Us'} subtitle={'Contact Us'} />
				<div className='row'>
					<h1>Contact</h1>
				</div>
			</div>
		</>
	);
};

export default Contact;
