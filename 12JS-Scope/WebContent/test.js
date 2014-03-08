//Global
var x = 9;

//local
function myFunc() {
    var x = 5;
}
 
console.log( x ); // ReferenceError: x is not defined

//Outer and inner
function outer() {
    var x = 5;
 
    function inner() {
        console.log( x );
    }
 
    inner(); // 5
}

//Functions have access to variables defined in the same scope.

var foo = "hello";
 
var sayHello = function() {
    console.log( foo );
};
 
sayHello(); // "hello"
 
console.log( foo ); // "hello"

//Variables with the same name can exist in different scopes with different values:
var foo = "world";

var sayHello = function() {
    var foo = "hello";
    console.log( foo );
};
 
sayHello(); // "hello"
 
console.log( foo ); // "world"

//When you reference a global variable within a function, 
//that function can see changes to the variable value after the function is defined.

var myFunction = function() {
    var foo = "hello";
    var myFn = function() {
        console.log( foo );
    };
    foo = "world";
    return myFn;
};
 
var f = myFunction();
 
f(); // "world"

//?
(function() {
	 
    var baz = 1;
 
    var bim = function() {
        console.log( baz );
    };
 
    bar = function() {
        console.log( baz );
    };
 
})();
