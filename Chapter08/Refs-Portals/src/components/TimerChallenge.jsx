import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title, targeTime}) {
    let timer = useRef();
    let dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targeTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targeTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targeTime * 1000);
        dialog.current.open();
    }

    function handleStart () {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop () {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targeTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targeTime} second{targeTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}