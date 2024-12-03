/*
Object => data type which has key pair value

// any real wrld entity which we can see it or touch it

how objects are defined in this key pair value format ' , ' seprated by coma, this all objects are wrapped in {}

// you can create object inside object
// you can also crete object inside array

to access element you need to make use of .
to access element of object inside object you need to use . .
to access element inside object of array . [index]
*/

var person = {
    name: 'Akshay',
    age: 1,
    isStudent : false,
    companyName: 'CloudThat',
    address: {
        add_line1 : "ABC colony",
        add_landmark : "XYZ near school",
        pin_code: 890888
    },
    hobbies : ['drawing', 'reading books', 'playing video games']
}

//console.log(person);
//lets access comapnyname
console.log(person.companyName);
console.log(person.address.pin_code);
console.log(person.hobbies[0]);

//enter new element in object
person.email = "akshayr@cloudthat.com"
person.Email = "akshayr@cloudthat.com"
person.address.add_line2 = "22"
// TO_DO => insert a new hoby like 'crying'


//update an existing element
person.name="AkshayRamnani"

//delete element
delete person.Email

console.log(person);
/*
You need to create prodouct object , there should be nested object, object array as well and then perform this type of CRUD operations
*/




