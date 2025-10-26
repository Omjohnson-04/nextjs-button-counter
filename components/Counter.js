'use client';
import { useState } from "react";
import "./Counter.css";

export default function Counter({ initialCount = 0, initialStep = 1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);
    
    const safeStep = Number.isFinite(step) && step > 0 ? Math.floor(step) : 1;
    const canDecrement = count > 0;

    const increment = () => setCount(c => c + safeStep);
    const decrement = () => {
        if (!canDecrement) return;
            setCount(c => Math.max(0, c - safeStep));
    };
    const reset = () => {
        setCount(initialCount);
    };

    const onStepChange = (e) => {
        const next = Number(e.target.value);
        if (Number.isNaN(next)) {
            setStep('');
        }
        else {
            setStep(next);
        }
    };

    return (
        <section className="counter">
            <div className="count" aria-live="polite" aria-atomic="true" role="status">
                {count}
            </div>
            <div>
                <h1>Counter</h1>
            <div>
                <span>{count}</span>
            </div>

                <label className="stepRow">
                    Step::&nbsp;
                    <input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        value={step}
                        onChange={onStepChange}
                        aria-label="Step amount"
                        className="stepInput"
                    />
                </label>

                <div className="buttons">
                    <button onClick={increment} aria-label={`Increment by ${safeStep}`}>+{safeStep}</button>
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={!canDecrement}
                        aria-label={`Decrement by ${safeStep}`}
                        title={!canDecrement ? 'Cannot go below 0' : undefined}
                    >
                        -{safeStep}
                    </button>
                    <button onClick={reset}>reset</button>
                </div>
            </div>
        </section>
    );
}
