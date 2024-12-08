import schoolImg from '../../../public/школа.jpg';
import agroclassImg from '../../../public/агрокласс.jpg';
import './AboutUs.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect} from 'react';

const AboutUs = (props) => {
	useEffect(() => {
		AOS.init({duration: 1000});
	}, []);
	
	return (
		<section className='section__about-us'>
			<div className="container" data-aos="flip-left">
				<div className="about__us" >
					<div className="about__us-text" >
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