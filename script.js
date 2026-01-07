document.getElementById("btn").addEventListener("click",function(event){
    event.preventDefault();
    const p = document.getElementById("password").value;
    const rep = document.getElementById("ReEnterPassword").value;
    document.getElementById("error").innerHTML="";
    if(p!=rep){
        document.getElementById("error").innerHTML="check the password";
        document.getElementById("form").reset();
        return;
    }else{
        alert("Login-Success!!");
        document.getElementById("form").reset();
    }
})