import { useCounter } from "./useCounter"

export function ClickCounter({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    

    

    return(
        <div>
            <h3>counter: {counter}</h3>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
                
            </div>
        </div>
    )
}