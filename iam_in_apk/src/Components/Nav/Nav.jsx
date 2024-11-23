import './Nav.css';

const Nav = (props) => {
	
	
	const showHomeHandler = (event) => {
		event.preventDefault();
		props.onShowHomeHandler();
	}
	
	const showQuizHandler = (event) => {
		event.preventDefault();
		props.onShowQuizHandler();
	}
	
	const showProfHandler = (event) => {
		event.preventDefault();
		props.onShowProfHandler();
	}
	
	return (
		<nav className='nav'>
			
			<div className="container">
				<div className="nav__menu">
					
					<ul className="nav__menu__list">
						<li className="nav__menu__list-item">
							<a href="#!" className='nav__menu-link' onClick={showHomeHandler}>
								<h3 className='title_3'>Главная</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showHomeHandler}>
								<h3 className="title_3">О нас</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showHomeHandler}>
								<h3 className="title_3">Наша цель</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showHomeHandler}>
								<h3 className="title_3">Сотрудничество</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showHomeHandler}>
								<h3 className="title_3">Отзывы</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showHomeHandler}>
								<h3 className="title_3">Обратная связь</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href='#!' className="nav__menu-link" onClick={showQuizHandler}>
								<h3 className="title_3" style={{fontWeight: '600'}}>Викторина</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
						<li className="nav__menu__list-item">
							<a href="#!" className="nav__menu-link" onClick={showProfHandler}>
								<h3 className="title_3" style={{fontWeight: '600'}}>Профориентация</h3>
								<img src="./../../../public/arrow.png" alt="arrow"/>
							</a>
						</li>
					</ul>
				
				</div>
			
			</div>
		</nav>
	);
};

export default Nav;