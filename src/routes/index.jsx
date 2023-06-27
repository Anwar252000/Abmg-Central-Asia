import React from 'react';

import HeroSlider from '../components/common/hero-slider';
import CompanyOverview from '../components/companyOverview';
import OurTeam from '../components/our-team';
import SubscribeArea from '../components/subscribe-area';
import VideoBox from '../components/video-box';

const Home = () => {
	return (
		<>
			<HeroSlider />
			<CompanyOverview />
			<OurTeam />
			<VideoBox />
			<SubscribeArea />
		</>
	);
};

export default Home;
