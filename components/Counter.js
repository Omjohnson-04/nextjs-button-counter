'use client';
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1}) {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(initialStep);
    
    const increment = () => {
        setCount(count + 1)
    };
    
    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const onStepChange = (e) => {
        const next = Number(e.target.value):

        if (Number.isNaN(next)) {
            setStep('');
        }
        else {
            setStep(next);
        }
    };

    return (
        <>
            <div className="count" aria-live="polite" aria-atomic="true" role="status">
                {count}
            </div><div>
                    <h1>Counter</h1>
                    <div>
                        <span>{count}</span>
                    </div>
                    <div className="counter">
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                        <button onClick={reset}>reset</button>
                    </div>
                </div>
        </>
    );
}

export default Counter;