import { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    function onCounterChange(value){
        console.log(value);
    }

    useEffect(() => {
        onCounterChange(counter)
    }, [counter])

    return(
        <div>
            <h3>The value is: {counter}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}