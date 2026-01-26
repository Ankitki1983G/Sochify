// script.js (FINAL)

document.addEventListener("DOMContentLoaded", function () {

    const authToggle = document.getElementById("authToggle");
    const loginBox = document.getElementById("loginBox");
    const signupBox = document.getElementById("signupBox");
    const msgBox = document.getElementById("msgBox");
    let isSignup = false;

    // ================= HELPERS =================
    function showMessage(text, type) {
        msgBox.className = `alert alert-${type} text-center`;
        msgBox.innerText = text;
        msgBox.classList.remove("d-none");
        setTimeout(() => msgBox.classList.add("d-none"), 4000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // ================= TOGGLE =================
    authToggle.addEventListener("click", e => {
        e.preventDefault();
        isSignup = !isSignup;
        loginBox.classList.toggle("d-none");
        signupBox.classList.toggle("d-none");
        authToggle.innerText = isSignup ? "Signin" : "Signup";
    });

    // ================= SIGNUP =================
    document.querySelector("#signupBox form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const password = this.password.value.trim();

        if (!name || !email || !password) {
            showMessage("All fields required", "danger");
            return;
        }

        if (!isValidEmail(email)) {
            showMessage("Invalid email", "danger");
            return;
        }

        if (password.length < 6) {
            showMessage("Password minimum 6 characters", "danger");
            return;
        }

        const users = getUsers();
        const exists = users.find(u => u.email === email);

        if (exists) {
            showMessage("Email already registered. Please login.", "danger");
            return;
        }

        users.push({ name, email, password });
        saveUsers(users);

        showMessage("🎉 Signup successful! Now login", "success");
        this.reset();

        signupBox.classList.add("d-none");
        loginBox.classList.remove("d-none");
        authToggle.innerText = "Signup";
        isSignup = false;
    });

    // ================= LOGIN =================
    document.querySelector("#loginBox form").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = this.email.value.trim();
        const password = this.password.value.trim();

        if (!email || !password) {
            showMessage("All fields required", "danger");
            return;
        }

        const users = getUsers();
        const user = users.find(u => u.email === email);

        if (!user) {
            showMessage("Account not found. Please signup first.", "danger");
            return;
        }

        if (user.password !== password) {
            showMessage("Incorrect password", "danger");
            return;
        }

        // ✅ LOGIN SUCCESS
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // 🔐 STRICT RULE: only login button click allows entry
        sessionStorage.setItem("loginClicked", "true");

        showMessage("✅ Login successful!", "success");

        setTimeout(() => {
            window.location.href = "../main_content/main_content.html";
        }, 1200);
    });

});
