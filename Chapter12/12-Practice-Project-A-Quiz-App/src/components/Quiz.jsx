import { useCallback, useState } from "react";
import QUESTIONS from './../questions';
import quizCompleteImg from './../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz () {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback ( function handleSelectAnswer (selectedAnswer) {
        setUserAnswers(prevUserAnswer => {
            return [
                ...prevUserAnswer,
                selectedAnswer
            ]
        });
    }, []);

    const handleSkipHandler = useCallback(() => {
        handleSelectAnswer(null);
    }, [ handleSelectAnswer ]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    const shuffleAnswered = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleAnswered.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={ handleSkipHandler }/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {
                        shuffleAnswered.map((answer) => {
                            return (
                                <li key={answer} className="answer">
                                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}