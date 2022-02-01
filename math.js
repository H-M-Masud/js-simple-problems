// const myNumber = -5;
// const output = Math.abs(myNumber);

const myNumber = 21.5;
// const output = Math.ceil(myNumber)
// const output = Math.floor(myNumber)
// const output = Math.round(myNumber)


for(var i =0; i <= 100; i++){
    const output = Math.random()*6;
    const rounded = Math.round(output)
    if(rounded == 6){
        console.log('This is six')
    }
    console.log(rounded)
}