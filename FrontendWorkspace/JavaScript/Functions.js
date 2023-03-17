//function declaration syntax
function sum(x,y){
    var result = x+y;
    return result;
}

var result = sum(12,13);
console.log("Result is:" + result)

//Function expression syntax(variable declaration and assignment)

var sum2 = function(x,y){
    var result = x+y;
    return result;
}

var result2 = sum2(10,20);
console.log("Result2 is:"+result2);