var days = [
    'Mon','Tues','Wed','Thurs'
];

console.log(days);
console.log(days[1]);
days[2] = 'Wednesday';
console.log(days[2]);
days[4] = 'Friday';
days[10] = 'test';
console.log(days);

//2 dimensional array

var twodarray=[
    [1,2,3],
    [4,5,6],
    [7,8,9,10,11,12,13]
];

console.log(twodarray[1][1]);


//Basic array methods
days.sort();
days.reverse();
console.log(days)

console.log(days.indexOf('Tues'))
console.log(days.indexOf('Saturday'))//Since no element saturday - it will return -1

var numbers = [20,60,10,40,50]

numbers.sort(function(x,y){
    return x-y
})

console.log(numbers)

var project = [
    {hours:20,name:'Project 1'},
    {hours:30,name:'Project 2'},
    {hours:10,name:'Project 3'},
    {hours:40,name:'Project 4'},
    {hours:50,name:'Project 5'}]

    project.sort(function(x,y){
    return x.hours-y.hours
})

console.log(project)


days.push("Sunday") //add element to last
console.log(days)

var removedele = days.pop();//delete element from last

console.log(days)
console.log(removedele)