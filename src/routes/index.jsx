import React from 'react';

import HeroSlider from '../components/common/hero-slider';
import CompanyOverview from '../components/companyOverview';
import OurTeam from '../components/our-team';
import SubscribeArea from '../components/subscribe-area';
import VideoBox from '../components/video-box';
import Clients from '../components/common/brands/brands-2';

const Home = () => {
	return (
		<>
			<HeroSlider />
			<CompanyOverview />
			<OurTeam />
			<VideoBox />
			<Clients />
			<SubscribeArea />
		</>
	);
};

export default Home;
