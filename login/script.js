


document.addEventListener("DOMContentLoaded", function(){
const authToggle = document.getElementById("authToggle");
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const msgBox = document.getElementById("msgBox");
let isSignup = false;

// Initial
loginBox.classList.remove("d-none");
signupBox.classList.add("d-none");
authToggle.innerText="Signup";

// Toggle forms
authToggle.addEventListener("click", e=>{
    e.preventDefault();
    if(!isSignup){
        loginBox.classList.add("d-none");
        signupBox.classList.remove("d-none");
        authToggle.innerText="Signin";
        isSignup=true;
    }else{
        signupBox.classList.add("d-none");
        loginBox.classList.remove("d-none");
        authToggle.innerText="Signup";
        isSignup=false;
    }
});

// Alerts
function showMessage(text,type){
    msgBox.className=`alert alert-${type} text-center`;
    msgBox.innerText=text;
    msgBox.classList.remove("d-none");
    setTimeout(()=>msgBox.classList.add("d-none"),4000);
}

// Email validation
function isValidEmail(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

// SIGNUP
document.querySelector("#signupBox form").addEventListener("submit", function(e){
    console.log("Signup submit fired");
    e.preventDefault();
    const name=this.name.value.trim();
    const email=this.email.value.trim();
    const password=this.password.value.trim();

    if(name===""||email===""||password===""){ showMessage("All fields required!","danger"); return; }
    if(name.length<3){ showMessage("Name min 3 chars","danger"); return; }
    if(!isValidEmail(email)){ showMessage("Invalid email","danger"); return; }
    if(password.length<6){ showMessage("Password min 6 chars","danger"); return; }

    fetch('signup.php',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
   .then(res => res.text())
.then(text => {
    console.log("Server response:", text);
    return JSON.parse(text);
})

    .then(data=>{
        if(data.status==='success'){
            showMessage(data.message,'success');
            signupBox.classList.add("d-none");
            loginBox.classList.remove("d-none");
            authToggle.innerText="Signup";
            isSignup=false;
            this.reset();
        }else showMessage(data.message,'danger');
    });
});

// LOGIN
document.querySelector("#loginBox form").addEventListener("submit",function(e){
    e.preventDefault();
    const email=this.email.value.trim();
    const password=this.password.value.trim();

    if(email===""||password===""){ showMessage("All fields required","danger"); return; }

    fetch('login.php',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body:`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status==='success') showMessage(data.message,'success');
        else showMessage(data.message,'danger');
        
    });
});
});
