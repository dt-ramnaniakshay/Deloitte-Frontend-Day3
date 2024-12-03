/*


there are mainly 3 ways how you can integrate your JS files



-> inline jvaScript

code sepration and easy to understand  ( <head> tag)
HTML and CSS <script> <script>



-> Exernal JS

<script src="locationofyourJSfile">


-> infilejs 

<script>

<script>

alert() => one sort of pop up box which you can only dismis it

prompt => box where you can enter the value , ok cancel

*/

//alert("Hello from external JS file")

let username = prompt("Please enter your name")

//template literals

//alert("Welcome to the ABC App"+username)


let isUserConfirmed = confirm("Are you sure you want to login that App")

if(isUserConfirmed){
    alert(`Welcome ${username}  to our ABC App`)
}else{
    alert("Sorry to let you go")
}

//design a system where you are checking user's age 
/*
 based upon the age you will tell them that either they are eligible for vote
 */

// by default this system will get input in string format only