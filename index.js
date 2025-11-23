document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();
    const user = {
        name: fullName.value,
        email: email.value,
        username: username.value,
        password: password.value
    };
    localStorage.setItem("ems-user", JSON.stringify(user));
    alert("Account created successfully!");
    window.location.href = "login.html";
});
