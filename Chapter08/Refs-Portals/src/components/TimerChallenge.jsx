import { useRef, useState } from "react";

export default function TimerChallenge ({title, targeTime}) {
    const [timerStarted, setTimerStarted] = useState(false); 
    const [timerExpired, setTimerExpired] = useState(false);

    let timer = useRef();

    function handleStart () {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targeTime * 1000);

        setTimerStarted(true);
    }

    function handleStop () {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
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
    );
}