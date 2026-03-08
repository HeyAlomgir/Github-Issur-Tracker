document.getElementById("sign-btn").addEventListener("click", function(){
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user == "admin" && pass == "admin123"){
        alert("Login succesfuly!");
        window.location.assign("homepage.html")
    }else{
        alert("Invalid !!!!!!!")
    }
})