
// Javascript External File

/* 
JavaScript program which JavaScript function printTimesTable
which prints times (till 10) table for given number as input.. 
*/

/*
function printTimesTable (number){
    console.log(`Prints times table (till 10) for ${number} as input...`);
    
    for(var i=1; i<=10; i++){        
        var multi = number * i;
        console.log(`${number} * ${i} = ` + multi);        
    }
    console.log("-------------");
};

console.log(printTimesTable(5));
*/

let multi = function(num1 , num2){
    return num1 * num2;
}
let printTimesTable = function (number , callback){
    console.log(`Prints times table (till 10) for ${number} as input...`);
    
    for(var i=1; i<=10; i++){ 
        console.log(`${number} * ${i} = ` +  callback(number, i));        
    }
    console.log("-------------"); // to decorate with an end line only 
};

console.log(printTimesTable(5, multi));
