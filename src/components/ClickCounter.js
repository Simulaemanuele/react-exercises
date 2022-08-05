import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </div>
            <h3>Current counter value: {counter}</h3>
        </div>
    )
}