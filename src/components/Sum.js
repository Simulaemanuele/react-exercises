export function Sum({numbers}){

    
    return(
        <div>
            <p>The numbers are {numbers}</p>
            <p>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number,0)}</p>
        </div>
    )
}