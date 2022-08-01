export function Sum({numbers = [1,2,3,4,5,6,7,8,9]}){

    
    return(
        <div>
            <p>The numbers are {numbers}</p>
            <h1>The sum of all numbers is: {numbers.reduce((number, sum) => sum + number,0)}</h1>
        </div>
    )
}