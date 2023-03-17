//Arithmetic opertors
console.log(10 + 20);
console.log(10.55 + 11.90);
var x = 15;
var y = 20;
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(2 ** 3); // power operator - same as Math.pow(2,3)
//relational operators
var isBefore = "hello" < "hi"; //compares if hello comes before hi in dictionary
console.log(isBefore)

var isGreater = 10 > 9
console.log(isGreater)

console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);
console.log(1 =='1')//true - it will coerce one of the datatype and return true.
console.log(1 === 1) //it will check if datatype and value are true
console.log(1 === '1')//false - datatype false

//logical operators
var isRaining = true,goingByWalk = true,goingByCar = true;
var takeUmbrella = isRaining && goingByWalk;
console.log(takeUmbrella);
takeUmbrella = isRaining || goingByWalk;
console.log(takeUmbrella);
console.log(!goingByCar);

//relational operators have precedence more than logical operators

//miscelleneous
var name = "Remya", message = "Hi";
console.log(message + " " + name);

var isTrafficHuge = city === 'Bangalore' ? 'Yes': 'NO';
console.log(isTrafficHuge)