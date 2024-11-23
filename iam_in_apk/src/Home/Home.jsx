import React from 'react';
import Welcome from './Welcome/Welcome.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';

const Home = (props) => {
	return (
		<React.Fragment>
			<Welcome />
			<AboutUs />
		</React.Fragment>
	);
};

export default Home;