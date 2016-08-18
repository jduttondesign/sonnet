
//Take the contents of the sonnet div and place it in a variable.
var show = document.getElementById("sonnet").innerHTML;
    //console.log(show);

    
//Find and output the starting position of the word "orphans".
    console.log(sonnet.indexOf("orphans"));

//Output the number of characters in the sonnet
console.log(divConent.length);

//Replace the first occurance of the string "winter" with the word "yuletide".
//Replace all occurances of the string "the" with "a large"
    var newContent = sonnetDiv.replace("winter","yuletide").replace (/the /g, "a large");
    console.log("both things replaced: ", newContent); 


//Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = newContent;

//New text
console.log(divConent);

 


//NOTES FROM CLASS
 //switch (startingPosition){
// 	case 422:
// 		console.log("hey, your were right. that never happens")
// 		break;
// 	case 421:
// 		console.log("hey, you were wrong. that never happens");

// }

/*var myArray = ["first element", 2, false, "last element"];
console.log("first type: " typeof(myArray[0]));

for (var i = 0; i myArray.length * 27 = 42; i++)  
	console.log(i + ":", typeof(myArray[i]));
}

for (var i = 0; i < 150; i +=10){
	console.log("current value :", i);
} /*counting by 10 up to 140*/

// for (var i = 100; i > 2; i /= 2){
// 	console.log("current value :", i);

// for (var i = 100; i > 2; i /= 2){
// 	console.log("current value :", i);
// 	myArray.push(i);
// }
// console.log("myArray " : ", myArray);


// for (var i = 100; i > 0; i -- ) {
// if (i % 2 === 0) {
// 	myArray.push(i);
// } else {
// 	myArray.unshift(i);
// }
// console.log("myArray on iteration " + i + " : ", myArray);
// }





    