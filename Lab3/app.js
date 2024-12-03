//alert("hello world from external js")
function addNumbers(){
    let numOne = parseInt(document.getElementById('numOne').value)
    let numTwo = parseInt(document.getElementById('numTwo').value)

    const result = numOne + numTwo
    //alert(typeof(result))

    document.getElementById('output').textContent= `Addition of two numbers is ${result}`
    //event preventDefault
}


//create one authentication system
/*
username is admin and password is password then and then they should get the message you are logged as admin 
*/