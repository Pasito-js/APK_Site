import './App.css';
import Home from './Home/Home.jsx';
import {useState} from 'react';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Proforientation from './Proforientation/Proforientation.jsx';
import Quiz from './Quiz/Quiz.jsx';
import Goal from './Components/Goal/Goal.jsx';
import Cooperative from './Components/Cooperative/Cooperative.jsx';


function App() {
	
	const [isShowHome, setIsShowHome] = useState(true);
	const [isShowQuiz, setIsShowQuiz] = useState(false);
	const [isShowProf, setIsShowProf] = useState(false);
	const setShowHomeHandler = () => {
		if (isShowHome) return;
		else {
			setIsShowHome(prevState => !prevState);
			setIsShowQuiz(false);
			setIsShowProf(false);
		}
	};
	
	const setShowQuizHandler = () => {
		if (isShowQuiz) return;
		else {
			setIsShowQuiz(prevState => !prevState);
			setIsShowHome(false);
			setIsShowProf(false);
		}
	};
	
	const setShowProfHandler = () => {
		if (isShowProf) return;
		else {
			setIsShowProf(prevState => !prevState);
			setIsShowHome(false);
			setIsShowQuiz(false);
		}
	};
	
	return (
		<>
			<Header/>
			<Nav onShowHomeHandler={setShowHomeHandler}
			     onShowQuizHandler={setShowQuizHandler}
			     onShowProfHandler={setShowProfHandler}/>
			{isShowHome && <Home/>}
			{isShowQuiz && <Quiz/>}
			{isShowProf && <Proforientation/>}
			{isShowHome && <Goal/>}
			{isShowHome && <Cooperative/>}
		</>
	);
}

export default App;
