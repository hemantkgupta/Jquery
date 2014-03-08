// A simple array with constructor.
var myArray1 = new Array( "hello", "world" );
 
// Literal declaration, the preferred way.
var myArray2 = [ "hello", "world" ];

//Creating empty arrays and adding values

var myArray = [];
 
// Adds "hello" on index 0
myArray.push( "hello" );
 
// Adds "world" on index 1
myArray.push( "world" );
 
// Adds "!" on index 2
myArray[ 2 ] = "!";

//Leaving indices

var myArray = [];
 
myArray[ 0 ] = "hello";
myArray[ 1 ] = "world";
myArray[ 3 ] = "!";
 
console.log( myArray ); // [ "hello", "world", undefined, "!" ];

//Accessing array items by index

var myArray = [ "hello", "world", "!" ];
 
console.log( myArray[ 2 ] ); // "!"

//Length of an array

var myArray = [ "hello", "world", "!" ];
 
console.log( myArray.length ); // 3

//For loops and arrays - alternate method

var myArray = [ "hello", "world", "!" ];
 
for ( var i in myArray ) {
 
    console.log( myArray[ i ] );
 
}

var myArray = [ 2, 3, 4 ];
var myOtherArray = [ 5, 6, 7 ];
var wholeArray = myArray.concat( myOtherArray ); // [ 2, 3, 4, 5, 6, 7 ]

//Joining elements

var myArray = [ "hello", "world", "!" ];
 
// The default separator is a comma.
console.log( myArray.join() );     // "hello,world,!"
 
// Any string can be used as separator...
console.log( myArray.join( " " ) );  // "hello world !";
console.log( myArray.join( "!!" ) ); // "hello!!world!!!";
 
// ...including an empty one.
console.log( myArray.join( "" ) );   // "helloworld!"

//Pushing and popping

var myArray = [];
 
myArray.push( 0 ); // [ 0 ]
myArray.push( 2 ); // [ 0 , 2 ]
myArray.push( 7 ); // [ 0 , 2 , 7 ]
myArray.pop();     // [ 0 , 2 ]

var myArray = [ "world" , "hello" ];
myArray.reverse(); // [ "hello", "world" ]

//Queue with shift() and push()

var myArray = [];
 
myArray.push( 0 ); // [ 0 ]
myArray.push( 2 ); // [ 0 , 2 ]
myArray.push( 7 ); // [ 0 , 2 , 7 ]
myArray.shift();   // [ 2 , 7 ]

//Slicing

var myArray = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
var newArray = myArray.slice( 3 );
 
console.log( myArray );  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log( newArray ); // [ 4, 5, 6, 7, 8 ]

var myArray = [ 0, 7, 8, 5 ];
myArray.splice( 1, 2, 1, 2, 3, 4 );
 
console.log( myArray ); // [ 0, 1, 2, 3, 4, 5 ]

//Sorting without comparing function.

var myArray = [ 3, 4, 6, 1 ];
 
myArray.sort(); // 1, 3, 4, 6

//Sorting with comparing function.

function descending( a, b ) {
    return b - a;
}
 
var myArray = [ 3, 4, 6, 1 ];
 
myArray.sort( descending ); // [ 6, 4, 3, 1 ]

var myArray = [];

myArray.unshift( 0 ); // [ 0 ]
myArray.unshift( 2 ); // [ 2 , 0 ]
myArray.unshift( 7 ); // [ 7 , 2 , 0 ]

//Native .forEach()

function printElement( elem ) {
    console.log( elem );
}
 
function printElementAndIndex( elem, index ) {
    console.log( "Index " + index + ": " + elem );
}
 
function negateElement( elem, index, array ) {
    array[ index ] = -elem;
}
 
myArray = [ 1, 2, 3, 4, 5 ];
 
// Prints all elements to the console
myArray.forEach( printElement );
 
// Prints "Index 0: 1", "Index 1: 2", "Index 2: 3", ...
myArray.forEach( printElementAndIndex );
 
// myArray is now [ -1, -2, -3, -4, -5 ]
myArray.forEach( negateElement );

