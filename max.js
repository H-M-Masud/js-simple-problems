const business = 1550;
const minister = 550;
const army = 650;

// compare three

/* 
if(business > minister && business > army){
    console.log('business person is bigger')
}
else if(minister > business && minister > army){
    console.log('minister is bigger')
}
else{
    console.log('army is bigger')
}

 */
/* 
function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

const larger = findLargest(241, 353);
console.log('lagest is', larger)

 */

/**********************************************************
 *  task 1: create a function that takes three number as
 *  input parameter and returns you the largest number
 **********************************************************  */
function findLargest(number1,number2, number3){
    const largest = Math.max(number1, number2, number3);
    return largest;
}
const larger = findLargest(90, 88, 102);
// console.log("Larger is ", larger)




/**********************************************************************
 *  task 2: write a function to  find the smallest of three numbers
 **********************************************************************  */

function findSmallest(number1, number2, number3){
    const smallest = Math.min(number1, number2, number3);
    return smallest;
}

const small = findSmallest(32, 19, 51);
console.log('Small number is ',small)
