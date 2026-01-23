document.addEventListener("DOMContentLoaded", function () {

    const authToggle = document.getElementById("authToggle");
    const loginBox = document.getElementById("loginBox");
    const signupBox = document.getElementById("signupBox");
    const msgBox = document.getElementById("msgBox");
    let isSignup = false;

    // Initial state
    loginBox.classList.remove("d-none");
    signupBox.classList.add("d-none");
    authToggle.innerText = "Signup";

    // Toggle login/signup
    authToggle.addEventListener("click", e => {
        e.preventDefault();
        if (!isSignup) {
            loginBox.classList.add("d-none");
            signupBox.classList.remove("d-none");
            authToggle.innerText = "Signin";
            isSignup = true;
        } else {
            signupBox.classList.add("d-none");
            loginBox.classList.remove("d-none");
            authToggle.innerText = "Signup";
            isSignup = false;
        }
    });

    // Alert box
    function showMessage(text, type) {
        msgBox.className = `alert alert-${type} text-center`;
        msgBox.innerText = text;
        msgBox.classList.remove("d-none");
        setTimeout(() => msgBox.classList.add("d-none"), 4000);
    }

    // Email validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ================= SIGNUP =================
    document.querySelector("#signupBox form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const password = this.password.value.trim();

        if (name === "" || email === "" || password === "") {
            showMessage("All fields required", "danger");
            return;
        }
        if (!isValidEmail(email)) {
            showMessage("Invalid email", "danger");
            return;
        }
        if (password.length < 6) {
            showMessage("Password min 6 chars", "danger");
            return;
        }

        fetch("signup.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        })
        .then(res => res.json())
        .then(data => {
            if (!data || !data.status) {
                showMessage("Invalid server response", "danger");
                return;
            }

            if (data.status === "success") {
                showMessage(data.message, "success");
                signupBox.classList.add("d-none");
                loginBox.classList.remove("d-none");
                authToggle.innerText = "Signup";
                isSignup = false;
                this.reset();
            } else {
                showMessage(data.message, "danger");
            }
        })
        .catch(err => {
            console.error(err);
            showMessage("Server error", "danger");
        });
    });

    // ================= LOGIN =================
    document.querySelector("#loginBox form").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = this.email.value.trim();
        const password = this.password.value.trim();

        if (email === "" || password === "") {
            showMessage("All fields required", "danger");
            return;
        }

        fetch("login.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        })
        .then(res => res.json())
        .then(data => {
            if (!data || !data.status) {
                showMessage("Invalid server response", "danger");
                return;
            }

            if (data.status === "success") {
                showMessage(data.message, "success");
                setTimeout(() => {
        window.location.href = "/Quiz/main_content/main_content.html"; 
    }, 1500);
            } else {
                showMessage(data.message, "danger");
            }
        })
        .catch(err => {
            console.error(err);
            showMessage("Server error", "danger");
        });
    });

});
