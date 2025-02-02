import { useState } from "react";

export default function TimerChallenge ({title, targeTime}) {
    const [timerStarted, setTimerStarted] = useState(false); 
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart () {
        setTimeout(() => {
            setTimerExpired(true);
        }, targeTime * 1000);

        setTimerStarted(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targeTime} second{targeTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}