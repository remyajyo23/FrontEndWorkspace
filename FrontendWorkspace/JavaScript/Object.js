var sholay = {
    name:'xxx',
    theatres:['a','b','c'],
    "box Office":{
        countries:10,
        collection:2500
    },//space can be given for a object var, but then enclose it in double quotes.
    add: function(amount){
        this["box Office"].collection+=amount;
    }
};

console.log(sholay)
console.log(sholay.name)
console.log(sholay.theatres[2])
console.log(sholay["box Office"])
sholay.add(20000)

sholay.villain = "Gabbar Singh"; //add property to object

delete sholay.name; //delete property from object

console.log(sholay)
