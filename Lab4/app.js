function checkForm(event){
    event.preventDefault();

    var f_name = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;

    console.log(f_name);
    
    //one condition: there should not be any empty field
    if((email == "") && (f_name == "") && (pwd == "")) {
        console.log("inside if block");
        
    document.getElementById('error_p').textContent = "Please enter all the fields"

    }else{
        console.log("inside else block");
        
        document.getElementById('output').textContent = `Form is valid ${f_name}`
    }
    //second condition : password and confirmpassword should be same

    //alert(` Output is ${f_name} ${email} ${pwd}`)
}