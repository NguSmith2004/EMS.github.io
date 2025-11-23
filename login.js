const savedUser = JSON.parse(localStorage.getItem("ems-user"));
if (localStorage.getItem("ems-session") === "active") {
    window.location.href = "dashboard.html";
}

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!savedUser) return alert("No account registered!");
    if (username.value === savedUser.username && password.value === savedUser.password) {
        localStorage.setItem("ems-session", "active");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});
