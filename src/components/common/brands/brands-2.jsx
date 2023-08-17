import Slider from 'react-slick';
import brands from '../../../data/brands';
import { Link } from 'react-router-dom';

const settings = {
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const Clients = ({ df }) => {
	return (
		<>
			<h1 className='component-heading'>DEDICATION TO OUR CLIENTS</h1>
			<div className='container pt-4 text-center'>
				<p>
					<i className='fa fa-quote-left px-2' aria-hidden='true'></i>Quality of
					works can be expected through personal satisfaction, dedication &
					enjoyment. In our profession, precision and perfection are not a
					dispensable luxury but a simple necessity
					<i className='fa fa-quote-right px-2' aria-hidden='true'></i>
				</p>
				<p>
					<i className='fa fa-quote-left px-2' aria-hidden='true'></i>Our talent
					determines what we can do. Our motivation determines how much we’re
					willing to do. Our attitude determines how well we do it
					<i className='fa fa-quote-right px-2' aria-hidden='true'></i>
				</p>
				<p>
					<i className='fa fa-quote-left px-2' aria-hidden='true'></i>Careful is
					not an intellectual exercise to keep us in work. It is a matter of
					right and wrong. It is the sum of our contributions to quality
					management that determines whether the people we work with is proud of
					<i className='fa fa-quote-right px-2' aria-hidden='true'></i>
				</p>
			</div>
			<h2 className='heading'>OUR CLIENTS</h2>

			<section className={`client__area ${df ? 'pt-80' : 'pt-80 pb-80'}`}>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'></div>
					</div>
					<div className='row'>
						<div className='col-xl-12'>
							<div
								className={`client__slider ${df ? 'pb-80' : ''} text-center`}
							>
								<Slider {...settings}>
									{brands.map((item, index) => {
										return (
											<div key={item.id} className='client__thumb'>
												<Link to={item.link} target='_blank'>
													<img src={item.img} alt='client' />
												</Link>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Clients;
