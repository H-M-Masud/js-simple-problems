/* function average(numbers){
    let total = 0;
    let totalElement = numbers.length;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        total = total + element;
    }
    return total / totalElement;
}

const marks = [54, 60, 58];
const avg = average(marks);
console.log(Math.round(avg)) */


function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i - 1];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const myNumber = [2, 3, 4, 3, 6, 3, 8, 12];
const biggestNumber = largestElement(myNumber);
console.log(biggestNumber)