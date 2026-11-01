
let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("sign_in")
let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" ,(e) =>{
    e.preventDefault()
    if(username.value == "" || password.value ==""){
        Swal.fire({
            title: "Please Fill All Data!",
            text: "You must fill all fields to continue",
            icon: "warning"
        });
    }else{
        if(getUserName.trim() === username.value.trim() && getPassword === password.value){
            setTimeout(()=>{
                window.location="index.html"
            },1000)
        }else{
            Swal.fire({
            title: "Wrong Data!",
            text: "Username or password is incorrect",
            icon: "error"
        });
        }
    }
})
let show = document.getElementById("show")
show.onclick = ()=>{
    if(show.checked){
        password.type = "text"
    }else{
        password.type = "password"
    }
}