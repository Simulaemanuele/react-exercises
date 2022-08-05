import { useEffect, useRef } from "react"

export function CarDetails({initialData}){
    const _formRef = useRef()

    function handleInputForm(event){

        const model = event.target.elements.model.value
        const year = event.target.elements.year.value
        const color = event.target.elements.color.value
        console.log({
            model,
            year,
            color
        })

        
    }

    useEffect(() => {
        _formRef.current.reset()
    }, [initialData])
    
    return(
        <div>
            <form ref={_formRef} onSubmit={handleInputForm}>
                <input name="model" defaultValue={initialData.defaultModel}/>
                <input name="year" type="number" defaultValue={initialData.defaultYear}/>
                <input name="color" defaultValue={initialData.defaultColor}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}