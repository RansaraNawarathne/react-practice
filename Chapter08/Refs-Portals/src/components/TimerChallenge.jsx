export default function TimerChallenge ({title, targeTime}) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targeTime} second{targeTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Time is runnning... / Timer inactive
            </p>
        </section>
    );
}