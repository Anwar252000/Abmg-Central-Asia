import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

// const footerWidget = [
// 	{
// 		id: 1,
// 		title: 'information',
// 		footer__links: [
// 			{ list: 'About Us', link: '/' },
// 			{ list: 'Careers', link: '/' },
// 			{ list: 'Delivery Inforamtion', link: '/' },
// 			{ list: 'Privacy Policy', link: '/privacypolicy' },
// 			{ list: 'Terms of Use', link: '/termsofuse' },
// 		],
// 	},
// 	{
// 		id: 2,
// 		title: 'Customer Service',
// 		footer__links: [
// 			{ list: 'Shipping Policy' },
// 			{ list: 'Help & Contact Us' },
// 			{ list: 'Returns & Refunds' },
// 			{ list: 'Online Stores' },
// 			{ list: 'Terms & Conditions' },
// 		],
// 	},
// ];

const Footer = ({ df }) => {
	return (
		<>
			<section className={`footer__area footer-bg ${df ? 'box-m-15' : ''}`}>
				<div className='footer__top pt-100 pb-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-6 col-lg-6 col-md-6 col-12'>
								<div className='footer__widget mb-30'>
									<div className='footer__widget-title mb-25'>
										<Link to='/'>
											<a>
												<img
													src='img/logo/logo2.png'
													alt='logo'
													className='w-25'
												/>
											</a>
										</Link>
									</div>
									<div className='footer__widget-content'>
										<p>ABMG Central Asia.</p>
										<div className='footer__contact'>
											<ul>
												<li>
													<div className='icon'>
														<i className='fal fa-map-marker-alt'></i>
													</div>
													<div className='text'>
														<span>
															Address:{' '}
															<Link
																to='https://goo.gl/maps/dZgTe1tQkfV4sHFn7'
																target='_blank'
															>
																Mezzanine 1B, Menara PKNS, 17 Jalan Yong Shook
																Lin, 46050 Petaling Jaya, Selangor, Malaysia
															</Link>
														</span>
													</div>
												</li>
												<li>
													<div className='icon'>
														<i className='fal fa-map-marker-alt'></i>
													</div>
													<div className='text'>
														<span>
															Address:{' '}
															<Link
																to='https://goo.gl/maps/eUFNGvRoRg4RnWn7A'
																target='_blank'
															>
																Mateen Shopping Galaxy, Rashid Minhas Rd Service
																Ln, Block 10-A Block 10 A Gulshan-e-Iqbal,
																Karachi, Karachi City, Sindh, Pakistan.
															</Link>
														</span>
													</div>
												</li>
												<li>
													<div className='icon'>
														<i className='fal fa-envelope-open-text'></i>
													</div>
													<div className='text'>
														<span>ABMG.hq@gmail.com</span>
													</div>
												</li>
												<li>
													<div className='icon'>
														<i className='fal fa-phone-alt'></i>
													</div>
													<div className='text'>
														<span>Phone Number: +60 19-274 2860</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-6 col-lg-6 col-md-6 col-12'>
								{/* Footer Col 2 */}
								{/* <SubscribeArea df h4 /> */}
								<Calendar
									prevLabel={<i className='fa fa-chevron-left'></i>}
									prev2Label={<i className='fa fa-chevron-double-left'></i>}
									nextLabel={<i className='fa fa-chevron-right'></i>}
									next2Label={<i className='fa fa-chevron-double-right'></i>}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='footer__bottom'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-6 col-lg-7'>
								<div className='footer__copyright'>
									<p>
										©{' 2023 '}
										All rights reserved
										<Link to='/'>
											<a> ABMG Central Asia</a>
										</Link>
									</p>
								</div>
							</div>
							<div className='col-xl-6 col-lg-5'>
								<div className='footer__social f-right'>
									<ul>
										<li>
											<a href='#'>
												<i className='fab fa-dribbble'></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-facebook-f'></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-twitter'></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fab fa-behance'></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-share-alt'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
