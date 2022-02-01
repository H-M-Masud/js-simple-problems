/* function largestElement(numbers){
    let largest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
   
}

const ages = largestElement([32,34, 42, 423, 54, 12, 34, 64, 23 ]);
const oldest2 = largestElement([-12, -6, -17]);
console.log(oldest2) */


// Task 1: find the lowest element of an array
function lowestElement(numbers){
    let lowest = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const ages = lowestElement([32,34, 42, 423, 54, 12, 34, 64, 23 ]);
console.log(ages)