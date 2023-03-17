function foo(x,y,z){
    console.log(x,y,z)
    console.log("function foo called")
    console.log(arguments)//arguments is object data type.
    console.log(arguments.length)
    console.log(arguments[0],arguments[1])
    for(var i = 0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}

foo('heelo','world')