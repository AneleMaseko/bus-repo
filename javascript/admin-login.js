
function login() {

    
    var email = document.getElementById("myEmail").value
    console.log(email)
    var password = document.getElementById("myPassword").value
    console.log(password)
    
    auth.signInWithEmailAndPassword(email,password).then((results)=>{
        location.href="admin-dashboard.html"

        alert( "Successfully loggedin","Succcessfully " ,"success")
    }).catch(()=>{

        alert(error)
    });
}

function signup() {

    
    var name = document.getElementById("name").value
    if (name=="") {
        swal( "Error","Input name is Empty" ,"error")
    return false;
        
    }
    var surname = document.getElementById("surname").value
    if (surname=="") {
        swal("Error","Input surname is Empty","error")
        return false;
        
    }
    var cellno = document.getElementById("cellno").value
    if (cellno=="") {
        swal("Error"," Input cell number is Empty","error")
        return false;
        
    }
    var email = document.getElementById("email").value
    if (email=="") {
        swal("Error"," Input email is Empty","error")
        return false;
        
    }
    var password = document.getElementById("password").value
    
    var conpassword = document.getElementById("conpassword").value
    if (password=="" || password!==conpassword ) {
        swal("Error", "password is empty or it does not match","error")
        return false
        
    }

    
    }

