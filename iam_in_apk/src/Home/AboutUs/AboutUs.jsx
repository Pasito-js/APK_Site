import schoolImg from '../../../public/школа.jpg';
import agroclassImg from '../../../public/агрокласс.jpg';
import './AboutUs.css';

const AboutUs = (props) => {
	return (
		<section className='section__about-us'>
			<div className="container">
				<div className="about__us">
					<div className="about__us-text">
						<h2 className="title_2">Кто мы такие?</h2>
						<p className='desc'>Мы - 10 агрокласс из <br/> МБОУ Большеколпанской СОШ. <br/> И у нас ооочень большие планы на жизнь!</p>
					</div>
					<img className='school' src={schoolImg} alt="school"/>
				</div>
				<img className='agroclass' src={agroclassImg} alt=""/>
			</div>
		</section>
	);
};

export default AboutUs;