import React, {useState} from 'react';
import HelloQuiz from './HelloQuiz/HelloQuiz.jsx';
import QuizGame from './QuizGame/QuizGame.jsx';

const Quiz = (props) => {
	const [showGame, setShowGame] = useState(false);
	
	setTimeout(() => setShowGame(true), 2000);
	
	return (
		<section>
			{!showGame && <HelloQuiz />}
			{showGame && <QuizGame />}
		</section>
	);
};

export default Quiz;