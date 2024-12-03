/*

Array => one sort of cobination where all the elements are stored all together []

=> 1,2,3,"akshay", true, false

CRUD operation
=> create the array
=> read the array
=> update an element
=> delete an element

array's index starts with 0

*/

let marksOfStudents = [50,78,98,59,25]

console.log(marksOfStudents);
//new keyword

console.log("Array's first element is ",marksOfStudents[0]);

let lastElement = marksOfStudents.length - 1 

console.log(lastElement);

console.log("Last element of array is ", marksOfStudents[lastElement]);

//update the value
marksOfStudents[2] = "fail"

//insert new element

marksOfStudents.push(98)

//remove an element

marksOfStudents.pop()

console.log(marksOfStudents);

//prepare an array of products => soap,shampoo, oil, shower gel, shaving cream 5 elements
//=> CRUD operations on array
