import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, remainingTime, targetTime, onReset }) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog className="result-modal" ref={dialog}>
            { userLost && <h2>You Lost</h2>}
            <p>The target time was  <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
}