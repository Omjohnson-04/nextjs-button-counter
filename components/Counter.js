'use client';
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    };
    
    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
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
    );
}

export default Counter;