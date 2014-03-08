// Flow control
 
var foo = true;
var bar = false;
 
if ( bar ) {
    // This code will never run.
    console.log( "hello!" );
}
 
if ( bar ) {
 
    // This code won't run.
 
} else {
 
    if ( foo ) {
        // This code will run.
    } else {
        // This code would run if foo and bar were both false.
    }
 
}

//Values that evaluate to true:
"0";
"any string";
[]; // An empty array.
{}; // An empty object.
1; // Any non-zero number.

//Values that evaluate to false:
""; // An empty string.
NaN; // JavaScript's "not-a-number" variable.
null;
undefined; // Be careful -- undefined can be redefined!
0; // The number zero.

//Set foo to 1 if bar is true; otherwise, set foo to 0:
var foo = bar ? 1 : 0;

//A switch statement

switch ( foo ) {
 
    case "bar":
        alert( "the value was bar -- yay!" );
        break;
 
    case "baz":
        alert( "boo baz :(" );
        break;
 
    default:
        alert( "everything else is just ok" );
 
}

var stuffToDo = {
		 
	    "bar": function() {
	        alert( "the value was bar -- yay!" );
	    },
	 
	    "baz": function() {
	        alert( "boo baz :(" );
	    },
	 
	    "default": function() {
	        alert( "everything else is just ok" );
	    }
	 
	};
	 
	// Check if the property exists in the object.
	if ( stuffToDo[ foo ] ) {
	    // This code won't run.
	    stuffToDo[ foo ]();
	 
	} else {
	    // This code will run.
	    stuffToDo[ "default" ]();
	 
	}
	
