import './Welcome.css';

import cowsImg from '../../../public/коровки.jpg';

const Welcome = (props) => {
	return (
		<section>
			<div className="welcome">
				
				<div className="text">
					<h2 className='title_2'>Я в АПК</h2>
					<p className='desc'>Обучающий проект для всех желающих. Здесь вы сможете узнать к
						какой
						отрасли в СХ вы больше подходите, а также пройдете веселую
						викторину!</p>
				</div>
				
				<div className="img">
					<img src={cowsImg} alt="Cows"/>
				</div>
				
			</div>
		</section>
	);
};

export default Welcome;