import React from 'react';

import HeroSlider from '../components/common/hero-slider';
import OurTeam from '../components/our-team';
import SubscribeArea from '../components/subscribe-area';
import VideoBox from '../components/video-box';
import Clients from '../components/common/brands/brands-2';
import Introduction from '../components/Introduction';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import OurServices from '../components/our-services';
import Experience from '../components/experience';
import SecretarialService from '../components/secretarial-service';

const Home = () => {
	return (
		<>
			<HeroSlider />
			<Introduction />
			<WhoWeAre />
			<WhatWeDo />
			<OurServices />
			<Experience />
			<SecretarialService />
			<OurTeam />
			<Clients />
			{/* <VideoBox /> */}
			<SubscribeArea />
		</>
	);
};

export default Home;
