// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
nth = (n-1)th + (n - 2)th
ith = (i - 1)th + (i - 2)th
*/
/* 
let fibo = [0, 1]
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
} */
// console.log(fibo)


/* 
function fibonacci(number){
    let fibo = [0, 1]
    for(let i = 2; i <= number; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboCount = fibonacci([412]);
console.log(fiboCount)
 */




function fibonacci(number){
    if(typeof number != 'number'){
        return "Please give a number";
    }
    if(number < 2){
        return "Please enter a positive number greater than 1"
    }
    let fibo = [0, 1]
    for(let i = 2; i <= number; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboCount = fibonacci(20);
console.log(fiboCount)



/* 
function multiple(num){
    return num **3;
}

const number = multiple(5);
console.log(number) */