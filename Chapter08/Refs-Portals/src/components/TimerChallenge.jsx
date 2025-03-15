import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title, targeTime}) {
    const [timerStarted, setTimerStarted] = useState(false); 
    const [timerExpired, setTimerExpired] = useState(false);

    let timer = useRef();
    let dialog = useRef();

    function handleStart () {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targeTime * 1000);

        setTimerStarted(true);
    }

    function handleStop () {
        clearTimeout(timer.current);
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
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Timer is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}