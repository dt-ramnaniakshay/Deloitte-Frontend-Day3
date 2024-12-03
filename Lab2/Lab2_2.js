/*

splice => allows you to modify array elements

index => at what index you want to insert /remove the element
0: the number of elements you want to remove
element : which element you want to insert it

//sort arrays

*/

let myFruits = ['apple', 'banana', 'cherry', 'kiwi']

//insert element at specific location

console.log("Before insertion\n",myFruits);

console.log("after insertion\n");

myFruits.splice(1,0,"orange")

console.log(myFruits);

//delete elelment at specific location

myFruits.splice(3,2)

console.log("after deletion\n",myFruits);

// sorting of arrays

console.log(myFruits.sort());
// how you can reverse sort this array 
//sorting is true only for string part , digits numbers

let myNumbers = [9,5,6,3,1,7,8,56]

myNumbers.sort((a, b) => a - b)
// try sorting in reverser order
console.log("Sorted numbers are\n",myNumbers);
