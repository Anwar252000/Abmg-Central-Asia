/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from './menu';
import useSticky from '../../hooks/use-sticky.js';
// import useGlobalContext from '../../hooks/use-context';

const Header = ({ header_big, white_bg }) => {
	const { headerSticky } = useSticky();

	// const { setShowSidebar } = useGlobalContext();
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<header>
				<div
					id='header-sticky'
					className={`header__area ${
						header_big ? 'box-25' : !white_bg && 'grey-bg'
					} 
        ${headerSticky ? 'sticky' : 'shadow'}`}
				>
					<div className={`${header_big ? 'container-fluid' : 'container'}`}>
						<div className='row align-items-center'>
							<div className='col-xl-3 col-lg-3 col-md-4 col-sm-4'>
								<div className='logo'>
									<Link to='/'>
										<strong>Ultimate Financial Advisor</strong>
									</Link>
								</div>
							</div>
							<div className='col-xl-9 col-lg-9 col-md-8 col-sm-8'>
								<div className='header__right p-relative d-flex justify-content-between align-items-center'>
									<div className='main-menu d-none d-lg-block'>
										<nav>
											<Menu />
										</nav>
									</div>
									<div className='mobile-menu-btn d-lg-none'>
										<button
											onClick={() => setShowSidebar(true)}
											className='mobile-menu-toggle'
										>
											<i className='fas fa-bars'></i>
										</button>
									</div>
									<div className='header__action'>
										<ul>
											<li>
												{/* <button
													className='search-toggle'
													onClick={() => dispatch(search_bar(true))}
												>
													<i className='ion-ios-search-strong'></i> Search
												</button> */}
											</li>
											{/* <li>
												{' '}
												<button>
													<i className='far fa-bars'></i>
												</button>
												<ul className='extra-info'>
													{extra_info.map((item, index) => (
														<li key={index}>
															<div className={`${item.class}`}>
																<div className='extra-title'>
																	<h5>{item.title}</h5>
																</div>
																<ul>
																	{item.listItems.map((list, index) => (
																		<li key={index}>
																			<Link to={`${list.link}`}>
																				{`${list.title}`}
																			</Link>
																		</li>
																	))}
																</ul>
															</div>
														</li>
													))}
												</ul>
											</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* search area start */}
			{/* <Search /> */}
			{/* search area end */}

			{/* sidebar start */}
			{/* <Sidebar /> */}
			{/* sidebar end */}
		</>
	);
};

export default Header;
