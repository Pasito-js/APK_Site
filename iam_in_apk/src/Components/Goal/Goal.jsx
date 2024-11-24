import houseImg from './../../../public/green_house.png';

import './Goal.css';

const Goal = (props) => {
	return (
		<section className="goal">
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