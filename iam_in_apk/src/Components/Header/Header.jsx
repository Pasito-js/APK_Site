import vkImg from '../../../public/vk.svg';
import logoImg from '../../../public/logo.png';

import './Header.css';

const Header = (props) => {
	return (
		<header>
			<div className="container">
				<div className="information">
					
					<ul className="socials">
						<li className="logotype">
							<a href="#!">
								<img src={logoImg} alt="Logo"/>
							</a>
						</li>
						<li className='circle'>
							<a href="#!" className="socials__link">
								<img src={vkImg} className='social' alt=""/>
							</a>
						</li>
						<li className='circle'>
							<a href="#!" className="socials__link">
								<img src={vkImg} className='social' alt=""/>
							</a>
						</li>
						<li className='circle'>
							<a href="#!" className="socials__link">
								<img src={vkImg} className='social' alt=""/>
							</a>
						</li>
						<li className='circle'>
							<a href="#!" className="socials__link border_right">
								<img src={vkImg} className='social' alt=""/>
							</a>
						</li>
					</ul>
					
					<ul className="contact">
						<p className='up'>Наша почта</p>
						<p className='down'>bschoolcolpany@mail.ru</p>
					</ul>
					
					<ul className="location">
						<p className='up'>ул. Садовая, дом 3</p>
						<p className='down'>д. Большие Колпаны, Гатчина</p>
					</ul>
				
				</div>
			</div>
		</header>
	);
};

export default Header;