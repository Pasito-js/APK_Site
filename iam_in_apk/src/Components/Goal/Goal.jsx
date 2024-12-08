import houseImg from '/green_house.png';
import './Goal.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect} from 'react';

const Goal = (props) => {
	useEffect(() => {
		AOS.init({duration: 1000});
	}, []);
	
	return (
		<section className="goal" data-aos="zoom-in">
			<div className="container">
				<div className="text">
					<h2 className="title_2">В чем цель данного проекта?</h2>
					<p className="goal__desc">Дать учащимся новые знания в области АПК, а
						также узнать какая профессия в СХ подойдет им больше всего. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit.</p>
				</div>
			</div>
			<img className="img" src={houseImg} alt="house"/>
		</section>
	);
};

export default Goal;