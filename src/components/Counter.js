import { useEffect, useState } from "react"

export function Counter({ initialValue = 0, incrementAmount = 1, intervalCounter = 1000 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log('MOUNT_COMPONENT')
        const interval = setInterval(() => {
            setCounter((counter) => {
                return counter + incrementAmount
            })
        }, intervalCounter)

        return () => {
            clearInterval(interval)
            console.log('UNMOUNT_COMPONENT')
        }
    }, [counter])



    return (
        <div>
            <h1>Counter: {counter}</h1>
        </div>
    )


}