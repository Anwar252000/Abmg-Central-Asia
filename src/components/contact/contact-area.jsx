import ContactForm from '../common/form/contact-form';

const ContactArea = () => {
	return (
		<>
			<section className='login-area my-4'>
				<div className='container bg-dark-blue'>
					<div className='row'>
						<div className='col-lg-8 offset-lg-2'>
							<h1 className='text-center text-light py-3 mb-1'>Contact Us</h1>
							<h6 className='text-light my-2'>
								Customer feedback is the lifeblood of our business. Tell us
								what’s on your mind, good or bad. We respond to all customer
								feedback and look forward to hearing from you!
							</h6>
							<div className='basic-login my-4'>
								{/* login form start */}
								<ContactForm />
								{/* login form end */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactArea;
