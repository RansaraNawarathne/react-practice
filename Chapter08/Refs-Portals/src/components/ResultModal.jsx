import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

export default function ResultModal({ ref, remainingTime, targetTime, onReset }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal (
        <dialog className="result-modal" ref={dialog}>
            { userLost && <h2>You Lost</h2> }
            { !userLost && <h2>Your Score: {score}</h2> }
            <p>The target time was  <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong></p>
            <form method="dialog" onClose={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}