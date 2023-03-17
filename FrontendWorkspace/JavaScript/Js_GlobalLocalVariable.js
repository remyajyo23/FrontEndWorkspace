var global = 1;
console.log("outside variable",global);

function foo() {
    var localFoo = 2;
    console.log("inside foo:global value",global);
    console.log("inside foo:local value", localFoo);
    function bar(){
        var localbar = 3;
        console.log("inside bar:global value",global);
        console.log("inside bar:localFoo value", localFoo);
        console.log("inside bar:localbar value", localbar);
    }
    console.log("outside bar:localbar value", localbar);
    bar();
}

foo();

