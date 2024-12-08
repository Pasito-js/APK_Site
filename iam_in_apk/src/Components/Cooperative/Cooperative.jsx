import './Cooperative.css';
import cowshed from '/АО_Гатчинское/коровник.jpg';
import autoPark from '/АО_Гатчинское/авто_парк.jpg';
import cows from '/АО_Гатчинское/коровы_АО_Гатчинское.jpg';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Cooperative = () => {
	
	useEffect(() => {
		AOS.init({duration: 1000});
	}, []);
	
	return (
		<div className="cooperative" data-aos="flip-left">
			<div className="container">
				<h2 className="title_2">Сотрудничество с АО Гатчинское</h2>
				<div className="cooperative__main">
					<div className="text">
						<h3 className="title_3">Основными направлениями деятельности
							предприятия являются: </h3>
						<p>- молочное животноводство;</p>
						<p>- выращивание племенных нетелей;</p>
						<p>- выращивание бычков;</p>
						<p>- производство овощей открытого грунта;</p>
						<p>- производство зерна.</p>
					</div>
					<img src={cowshed} alt=""/>
				</div>
				<img src={autoPark} className='cooperative__img' alt=""/>
				<img src={cows} className='cooperative__img' alt=""/>
			</div>
		</div>
	);
};

export default Cooperative;