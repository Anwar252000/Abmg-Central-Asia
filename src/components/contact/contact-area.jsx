import ContactForm from '../common/form/contact-form';

const ContactArea = () => {
	return (
		<>
			<section className='login-area pt-100 pb-100'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 offset-lg-2'>
							<h1 className='text-center py-3 mb-4 border-top border-bottom'>
								Contact Us
							</h1>
							<h6>
								Customer feedback is the lifeblood of our business. Tell us
								what’s on your mind, good or bad. We respond to all customer
								feedback and look forward to hearing from you!
							</h6>
							<div className='basic-login'>
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
