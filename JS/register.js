let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let registerBtn = document.getElementById("sign_up")

registerBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(username.value == "" || email.value =="" || password.value == ""){
        Swal.fire({
            title: "Please Fill All Data!",
            text: "You must fill all fields to continue",
            icon: "warning"
        });
    }else{
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        setTimeout(()=>{
            window.location="login.html"
        },1000)
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