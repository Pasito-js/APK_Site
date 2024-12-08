import logoImg from '/logo.png';
import './Header.css';
import {FaTelegram, FaVk} from 'react-icons/fa6';

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
							<a href="https://vk.com/maluyparen" className="socials__link">
								<FaVk color={'black'} className='social-link'/>
							</a>
						</li>
						<li className='circle'>
							<a href="https://t.me/maluyparen" className="socials__link">
								<FaTelegram color={'black'} className='social-link'/>
							</a>
						</li>
					</ul>
					
					<ul className="contact">
						<p className='up'>Почта</p>
						<p className='down'>k.chichinyuk@mail.ru</p>
					</ul>
					
					<ul className="location">
						<p className='up'>Ленинградская обл, Гатчинский р-он</p>
						<p className='down'>д. Большие Колпаны, ул. Садовая, дом 4</p>
					</ul>
				
				</div>
			</div>
		</header>
	);
};

export default Header;